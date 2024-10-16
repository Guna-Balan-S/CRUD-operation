document.getElementById('addButton').addEventListener('click', addItem);

let items = [];

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();
    
    if (itemText) {
        items.push(itemText);
        itemInput.value = '';
        renderItems();
    }
}

function renderItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerText = item;

        // Update button
        const updateButton = document.createElement('button');
        updateButton.innerText = 'Update';
        updateButton.onclick = () => updateItem(index);
        li.appendChild(updateButton);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = () => deleteItem(index);
        li.appendChild(deleteButton);

        itemList.appendChild(li);
    });
}

function updateItem(index) {
    const newItem = prompt("Update item:", items[index]);
    if (newItem !== null) {
        items[index] = newItem;
        renderItems();
    }
}

function deleteItem(index) {
    items.splice(index, 1);
    renderItems();
}