//UI elements as variables
const form = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');
let taskLabel = document.querySelector('.task-label');

//Call for load all events listeners
loadEventListeners();


//Function to load all events listeners
function loadEventListeners() {
  
  //Add task event
  form.addEventListener('submit', addTask);

  //Remove task event
  taskList.addEventListener('click', removeTask);

  //Clear tasks
  clearBtn.addEventListener('click', clearTasks);
};


//Function to add a task
function addTask(e) {
  e.preventDefault();

  // Define all UI elements as variables with no values
  let li;
  let textNode; 
  let link;

  //Setting the messages in the input window
  if (taskInput.value === '') {
    taskLabel.innerHTML = "Please enter a value.";
  } else if (taskInput.value !== '') {
    taskLabel.innerHTML = "New task";
  }
  
  if (taskInput.value !== "") {
    //Create li element with a class and a text given from input 
    textNode = document.createTextNode(taskInput.value);
    li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(textNode);
    console.log('1st value');

    //Create new link element with a class and an icon to delete the item 
    link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    console.log(link);

    //Add item to UI and clear the last given input text
    //Append link to li
    li.appendChild(link);

    //Appnd li to ul
    taskList.appendChild(li);

    //Clear input
    taskInput.value = '';
  }

}


//Remove task function
function removeTask(e) {
  const deleteItem = document.querySelector('delete-item');
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

// Clear task function
function clearTasks() {
  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.firstChild);
  }

console.log('clear tasks');
}