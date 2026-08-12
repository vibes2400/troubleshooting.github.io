// First list, saves tasks.

// Create a task Array
let tasks = [];

// Function to Display tasks
function displayTasks() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html += "<li>" + tasks[i] +
    " <button onclick='removeTask(" + i + ")'>x</button></li>";
  }
  document.getElementById("list").innerHTML = html;
}

// Function to Add a task
function addTask() {
  let taskInput = document.getElementById("task");
  let text = taskInput.value;
  if (text === "") {
    return;
  }
  tasks.push(text);
  taskInput.value = "";
  saveTasks();
  displayTasks();
}

// Function to Remove a task
function removeTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  displayTasks();
}


// Function to Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to Load tasks
function loadTasks() {
  let saved = localStorage.getItem("tasks");
  if (saved !== null) {
    tasks = JSON.parse(saved);
  }
}

// Second list, able to put into multiple lists.

// Load and display tasks when page loads
loadTasks();
displayTasks()
function addItem() {
  const input = document.getElementById('itemInput');
  const selector = document.getElementById('listSelector');
  const text = input.value.trim();
  
  if (text === '') return;

  const targetListId = selector.value;
  const targetList = document.getElementById(targetListId);

  const newItem = document.createElement('li');
  newItem.textContent = text;
  
  targetList.appendChild(newItem);
  input.value = '';
}