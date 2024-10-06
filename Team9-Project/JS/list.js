document.getElementById('createTask').addEventListener('click', function () {
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('startDate').value;
    const priority = document.getElementById('priority').value;
    const assignMember = document.getElementById('assignMember').value;

    if (taskName && taskDescription && dueDate && priority && assignMember) {
        const task = {
            taskName,
            taskDescription,
            dueDate,
            priority,
            assignMember
        };

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        alert("Task Added Successfully!");


        document.getElementById('taskName').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('startDate').value = '';
        document.getElementById('priority').value = 'Low'; 
        document.getElementById('assignMember').value = '';  

        loadTasks();
    } 
    });
    
    window.onload = loadTasks()

    function loadTasks() {
    const taskTableBody = document.getElementById('taskTableBody');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    taskTableBody.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.classList.add('task-row'); 

        row.innerHTML = `
            <td><input type="checkbox" class="row-checkbox"></td>
            <td class="name">${task.taskName}</td>
            <td class="desc">${task.taskDescription}</td>
            <td class="${getPriorityClass(task.priority)}">${task.priority}</td>
            <td>${task.assignMember}</td>
            <td>${task.dueDate}</td>
            <td></td>
            <td>${new Date().toLocaleDateString()}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td>Prashant Palve</td>
        `;

        taskTableBody.appendChild(row);
    });

    function getPriorityClass(priority) {
        if (priority === 'Low') return 'priority-low';
        if (priority === 'Medium') return 'priority-medium';
        if (priority === 'High') return 'priority-high';
        return '';
    }


    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(event) {
        const searchTerm = event.target.value.toLowerCase();

        document.querySelectorAll('.task-row').forEach(row => {
        const taskName = row.querySelector('.name').textContent.toLowerCase();
        const taskDescription = row.querySelector('.desc').textContent.toLowerCase();

        if (taskName.includes(searchTerm) || taskDescription.includes(searchTerm)) {
            row.style.display = 'table-row'; 
        } else {
            row.style.display = 'none';
        }
    });
});
}
