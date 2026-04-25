"use strict";
const taskInput = document.getElementById('taskInputField');
const addButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const tasks = [];
function renderTasks() {
    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="empty-state">No tasks yet. Add one above!</div>';
        return;
    }
    taskList.innerHTML = tasks.map((task, index) => `
        <li class="task-item ${task.completed ? 'completed' : ''}">
            <span class="task-text">${task.text}</span>
            <div class="task-actions">
                <button class="task-btn complete-btn" onclick="toggleTask(${index})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="task-btn delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>
        </li>
    `).join('');
}
function addTask() {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter')
        addTask();
});
