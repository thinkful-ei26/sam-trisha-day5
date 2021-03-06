'use strict';

const STORE = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: true}, 
  {name: 'bread', checked: false}
];

// // okay
// STORE.push({name: "chocolate", checked: true});

// // not okay!
// STORE = {foo: 'bar'};

//console.log(STORE);

// make each individual <li> item
// we think itemIndex is there for finding the right item when a button is pushed use STORE
function generateItemElement(item, itemIndex, template) {
  return `
  <li class="js-item-index-element" data-item-index="${itemIndex}">
      <span class="shopping-item js-shopping-item ${item.checked ? 'shopping-item__checked' : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>
`;}

function generateShoppingItemsString(shoppingList){
  console.log('generating shopping list element');

  const item = shoppingList.map((item, index) => generateItemElement(item, index));

  return item.join('');

}



//A shopping list should be rendered to the page with all current items in STORE 
function renderShoppingList(){
  console.log('renderShoppingList ran');
  const shoppingListItemsString = generateShoppingItemsString(STORE);

  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);


  //   For each item in STORE, generate a string representing an <li> with:
  // the item name rendered as inner text
  // the item's index in the STORE set as a data attribute on the <li> (more on that in a moment)
  // the item's checked state (true or false) rendered as the presence or absence of a CSS class for indicating checked items (specifically, .shopping-item__checked from index.css)
  // Join together the individual item strings into one long string
  // Insert the <li>s string inside the .js-shopping-list <ul> in the DOM.

}

//You should be able to add items to the list
function handleNewItemSubmit() {
  console.log('handleNewItemSubmit ran');
}

// You should be able to check items on the list
function handleItemCheckedClicked() {
  console.log('handleItemCheckedClicked ran');
}

// You should be able to delete items from the list
function handleItemDeleteClicked(){
  console.log('handleItemDeleteClicked ran');
}

// main() job is to run all other fn
function main(){
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckedClicked();
  handleItemDeleteClicked();
}


$(main);