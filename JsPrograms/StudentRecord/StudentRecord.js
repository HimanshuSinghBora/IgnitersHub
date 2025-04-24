document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    // Create a new row in the table
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert new cells for name, age, grade, and action
    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const gradeCell = newRow.insertCell(2);
    const actionCell = newRow.insertCell(3);

    // Set cell values
    nameCell.textContent = name;
    ageCell.textContent = age;
    gradeCell.textContent = grade;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        table.deleteRow(newRow.rowIndex - 1); // Delete the row
    };
    actionCell.appendChild(deleteButton);

    // Clear input fields
    document.getElementById('studentForm').reset();
});