// 1. Item Object
// Each item is an object with properties: id, name, quantity, and price.

let inventory = [
    { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
];

// 2. Inventory Management Functions

// Add Item: addItem
function addItem(inventory, item) {
    inventory.push(item);
}

// Update Item: updateItem
function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
    }
}

// Delete Item: deleteItem
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
}

// 3. Additional Utility Functions

// Get Item: getItem
function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
}

// Print Inventory: printInventory
function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 4));
}

// Main Program

console.log("Initial Inventory:");
printInventory(inventory);

// Add an item
addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });
console.log("\nAdding item:");
printInventory(inventory);

// Update an item
updateItem(inventory, 1, { quantity: 12 });
console.log("\nUpdating item:");
printInventory(inventory);

// Delete an item
deleteItem(inventory, 2);
console.log("\nDeleting item:");
printInventory(inventory);

// Get an item
const item = getItem(inventory, 1);
console.log("\nGet item with id 1:", item);
