const todoList = document.getElementById("todo-list");
const addTodoForm = document.getElementById("add-todo-form");
const todoInput = document.getElementById("todo-input");

addTodoForm.addEventListener("submit"), function(event) {
  event.preventDefault();
  const todo = todoInput.value;
  if (todo.trim().length === 0) {
    return;
  }

}