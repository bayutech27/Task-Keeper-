//Referencing the ID 


const taskInput = document.querySelector('#taskInput');

const addButton = document.querySelector('#add-btn');


const taskList = document.querySelector('#task-list');

const notice = document.querySelector('h5');

 

//Logic

addButton.addEventListener('click', function(){

if (taskInput.value === '') {
    alert('Oops! You must add a task.')
}else {

const listItem = document.createElement('li');

const span = document.createElement('span');

const check = document.querySelector('.check');
    
 listItem.textContent = taskInput.value;
 span.textContent = 'delete';
 listItem.appendChild(span);
 taskList.appendChild(listItem);
};
    taskInput.value = '';
     saveTasks();
 });
 
 
 
 taskList.addEventListener('click', function(e){
 
  // delete task when span is clicked
  
  if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove(); 
    saveTasks();
    
  }
  // underline task when li is clicked
  else if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
    e.target.classList.add('check');
    
    saveTasks();     
  };
  

});




function saveTasks(){
  localStorage.setItem('tasks', taskList.innerHTML);
  
};

 taskList.innerHTML = localStorage.getItem('tasks') || '';
