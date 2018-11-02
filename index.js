'use strict';

const STORE = [
  {name: "apples", checked: false},
  {name: "oranges", checked: false},
  {name: "milk", checked: true}, 
  {name: "bread", checked: false}
];

// // okay
// STORE.push({name: "chocolate", checked: true});

// // not okay!
// STORE = {foo: 'bar'};

console.log(STORE);

//A shopping list should be rendered to the page
function renderShoppingList(){
  console.log('`renderShoppingList` ran');
}

//You should be able to add items to the list
function handleNewItemSubmit() {
  console.log('`handleNewItemSubmit` ran');
}

// You should be able to check items on the list
function handleItemCheckedClicked() {
  console.log('`handleItemCheckedClicked` ran');
}

// You should be able to delete items from the list
function handleItemDeleteClicked(){
  console.log('`handleItemDeleteClicked` ran');
}

// main() job is to run all other fn
function main(){
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckedClicked();
  handleItemDeleteClicked();
}


$(main);