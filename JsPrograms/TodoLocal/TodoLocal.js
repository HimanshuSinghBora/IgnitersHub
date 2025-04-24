function loadList() {
    const list = JSON.parse(localStorage.getItem('itemList')) || [];
    const itemList = document.getElementById('taskList');
    itemList.innerHTML = ''; // Clear the current list
    list.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function() {
            deleteItem(index);
        });

        li.appendChild(deleteButton);
        itemList.appendChild(li);
    });
}

function deleteItem(index) {
    const list = JSON.parse(localStorage.getItem('itemList')) || [];
    list.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('itemList', JSON.stringify(list)); // Save the updated list
    loadList(); // Reload the list to reflect changes
}

// Load the list when the page loads
window.onload = loadList;

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    // Get the current list from local storage
    const list = JSON.parse(localStorage.getItem('itemList')) || [];
    // Add the new item to the list
    list.push(taskText);
    // Save the updated list back to local storage
    localStorage.setItem('itemList', JSON.stringify(list));
    // Clear the input field
    taskInput.value = '';
    // Reload the list to display the new item
    loadList();

    // Clear the input field
    taskInput.value = '';
});