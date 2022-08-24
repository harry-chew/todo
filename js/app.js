const todoInput = document.getElementById("todo-input");
const todoAddButton = document.getElementById("todo-add-button");
const todoList = document.getElementById("todo-list");
const todoFilter = document.getElementById("todo-filter");

todoAddButton.addEventListener("click", addTodo);
todoFilter.addEventListener("change", filterTodo);


function addTodo(event) {
  event.preventDefault();
  let text = todoInput.value;
  if(!text == "") {
    //create li item and para tag
    const todoItem = document.createElement("li");
    const todoText = document.createElement("p");
    //place input field text into para element
    todoText.innerText = text;
    //add the todoText into the todoItem
    todoItem.appendChild(todoText);

    //create complete button
    const todoComplete = document.createElement("button");
    //create event listener onclick for complete button
    todoComplete.addEventListener("click", completeTodo);
    todoComplete.classList.add("completeBtn");
    todoComplete.innerHTML = '<i class="fa fa-check"></i>';
    //add the todoComplete element to the todoItem
    todoItem.appendChild(todoComplete);

    //create delete button
    const todoDelete = document.createElement("button");
    //create event listener onclick for delete button
    todoDelete.addEventListener("click", deleteTodo);
    todoDelete.classList.add("deleteBtn");
    todoDelete.innerHTML = '<i class="fa fa-trash"></i>';
    //add the todoDelete element to the totoItem
    todoItem.appendChild(todoDelete);
    //add the todoItem to the todoList
    todoList.appendChild(todoItem);

    //reset the value inside text field to nothing
    todoInput.value = "";
  }
}

function deleteTodo(event) {
  event.preventDefault();
  //remove the entire LI item by grabbing the parent element of what we clicked
  event.target.parentElement.remove();
}

function completeTodo(event) {
  event.preventDefault();
  //add class of "completed" to the LI element of what we clicked
  event.target.parentElement.classList.add("completed");
  //put a line-through on the P tag element of the item we clicked
  event.target.parentElement.firstElementChild.style = "text-decoration : line-through;";
}

function filterTodo(event) {
  event.preventDefault();
  const todoItems = todoList.getElementsByTagName("li");
    for (let i = 0; i < todoItems.length; ++i) {
      switch (todoFilter.value) {
        case "all":
            todoItems[i].style.display = "flex";
          break;

        case "completed":
            if(todoItems[i].classList.contains("completed")) {
              todoItems[i].style.display = "flex";
            } else {
              todoItems[i].style.display = "none";
            }
          break;

        case "uncompleted":
        if(todoItems[i].classList.contains("completed")) {
          todoItems[i].style.display = "none";
        } else {
          todoItems[i].style.display = "flex";
        }
          break;

        default:
        break;
      }
    }
}
