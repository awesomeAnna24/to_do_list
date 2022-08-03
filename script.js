'use strict';
//Create a list element to be used to add user task
const list = [{ id: 1, name: 'name' }];
const taskList = document.createElement('li');
//Append list to its parent
const tasks = document.querySelector('ul');
tasks.appendChild(taskList);
//Add user input to the list
const taskInput = document.querySelector('input').value;
//On click, add user input to the task list
document.querySelector('button').addEventListener('click', render);
function render() {
  taskList.innerText = taskInput;
  //Save item to local storage to allow display on refresh
  localStorage.setItem(1, taskInput);
}

taskList.innerText = localStorage.getItem(1);
