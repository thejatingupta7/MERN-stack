const itemNameInput = document.getElementById('item-name');
const itemQuantityInput = document.getElementById('item-quantity');
const addItemButton = document.getElementById('add-item');
const shoppingList = document.getElementById('shopping-list');

addItemButton.addEventListener('click', () => {
  const itemName = itemNameInput.value.trim();
  const itemQuantity = itemQuantityInput.value;

  if (itemName !== '') {
    const listItem = document.createElement('li');
    listItem.classList.add('shopping-list-item');
    listItem.textContent = `${itemName} (${itemQuantity})`;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      // Implement edit functionality here
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      listItem.remove();
    });

    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    shoppingList.appendChild(listItem);

    itemNameInput.value = '';
    itemQuantityInput.value = '';
  }
});
