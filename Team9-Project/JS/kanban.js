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

window.onload = loadTasks;

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('todoList');
    taskList.innerHTML = '<h5 class="font-weight-semibold">To Do</h5>';

    storedTasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.setAttribute('id', `task-${index}`);
        taskElement.setAttribute('draggable', 'true');
        taskElement.classList.add('task-item');
        taskElement.addEventListener('dragstart', dragStart);

        taskElement.innerHTML = `
            <div class="card shadow-sm mb-3">
                <div class="card-body">
                    <h5 class="card-title text-primary font-weight-bold">${task.taskName}</h5>
                    <p class="card-text">
                        <strong>Description:</strong> ${task.taskDescription}
                    </p>
                    <p class="card-text">
                        <strong>Due Date:</strong> ${task.dueDate}
                    </p>
                    <p class="card-text">
                        <strong>Assigned To:</strong> ${task.assignMember}
                    </p>
                </div>
                <div class="card-footer text-right">
                    <button class="btn btn-sm btn-outline-danger delete-btn">Delete</button>
                </div>
            </div>
        `;
        
        taskList.appendChild(taskElement);

        const deleteButton = taskElement.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
            taskElement.remove();
            storedTasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        });

    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(event) {
        const searchTerm = event.target.value.toLowerCase();

        document.querySelectorAll('.task-item').forEach(taskElement => {
            const taskName = taskElement.querySelector('.card-title').textContent.toLowerCase();
            const taskDescription = taskElement.querySelector('.card-text').textContent.toLowerCase();

            if (taskName.includes(searchTerm) || taskDescription.includes(searchTerm)) {
                taskElement.style.display = 'block';
            } else {
                taskElement.style.display = 'none';
            }
        });
    });
    
}


function allowDrop(event) {
    event.preventDefault();
}

function drop(event, listId) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const taskElement = document.getElementById(data);
    const targetList = document.getElementById(listId);

    if (targetList && taskElement) {
        targetList.appendChild(taskElement); 
    }
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}