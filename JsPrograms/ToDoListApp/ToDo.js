document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');

    newTask.textContent = taskText;

    // Create a button to mark the task as completed
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completed';
    completeButton.onclick = function() {
        newTask.classList.toggle('completed');
    };

    // Create a button to delete the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        taskList.removeChild(newTask);
    };

    newTask.appendChild(completeButton);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = '';
});