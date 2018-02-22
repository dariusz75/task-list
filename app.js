//UI elements as variables
const form = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');
let taskLabel = document.querySelector('.task-label');

//Function to load all events listeners
function loadEventListeners() {
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
};

//Call for load all events listeners
loadEventListeners();

//Function to add a task
function addTask(e) {
  e.preventDefault();

  if (taskInput.value === '') {
    taskLabel.innerHTML = "Please enter a value.";
  } else if (taskInput.value !== '') {
    taskLabel.innerHTML = "New task";
  }

  //Create li element with a class and a text given from input 
  const li = document.createElement('li');
  const textNode = document.createTextNode(taskInput.value);
  li.className = 'collection-item';
  li.appendChild(textNode);

  //Create new link element with a class and an icon to delete the item 
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append link to li
  li.appendChild(link);

  //Appnd li to ul
  taskList.appendChild(li);

  //Clear input
  taskInput.value = '';

}


//Remove task function
function removeTask(e) {
  const deleteItem = document.querySelector('delete-item');
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
}