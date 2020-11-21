var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

//var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
var todos = JSON.parse(localStorage.getItem('todos')) || []

//console.log(todos)

function renderToDos() {

    // clear existing todos
    todoList.innerHTML = ''
    //re-render todos
    for (var i = 0; i < todos.length; i++) {
        //create li elemeent
        var li = document.createElement('li')
        //add todo text to li
        li.innerText = todos[i]
        //add data-index attribute
        li.setAttribute('data-index', i)
        //create button
        var button = document.createElement('button')
        button.innerText = "Complete"
        li.appendChild(button)
        // append li to todoList
        todoList.appendChild(li)
    }
}

function addTodo(event) {
    event.preventDefault()
    //get todoInput value
    var newTodo = todoInput.value

    //console.log(newTodo)

    if (newTodo === '') {
        return

    }
    //push value into todos
    todos.push(newTodo)
    todoInput.value = null 
    localStorage.setItem('todos', JSON.stringify(todos))

    renderToDos()
    
    

}

function removeToDo(event) {
    var target = event.target
    if (event.target.matches('button')) {
        //find index LI
        var index = parseInt(target.parentNode.getAttribute('data-index'))
        //remove the todo from todos array
        todos.splice(index, 1)
        localStorage.setItem('todos', JSON.stringify(todos))
        //re-render todos
        renderToDos()
    }
}

todoForm.addEventListener('submit', addTodo)
todoList.addEventListener('click', removeTodo)

renderToDos()
