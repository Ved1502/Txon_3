const inputTask = document.getElementById("input-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

function addTask(event) {
  event.preventDefault();
  if (inputTask.value !== "") {
    const task = document.createElement("li");
    task.innerHTML = `${inputTask.value} <button class="delete-task">Delete</button>`;
    taskList.appendChild(task);
    inputTask.value = "";
  }
}

function deleteTask(event) {
  if (event.target.classList.contains("delete-task")) {
    event.target.parentNode.remove();
  }
}

addTaskButton.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
