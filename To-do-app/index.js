const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask(){
    const taskText = taskInput.value;
    if(taskText.trim() !== ''){
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `<span>${taskText}</span>
        <button class = "deleteButton">Delete</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = '';


        const deleteButton = taskItem.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });
    }
}