const input = document.querySelector('.inpfld');
const addBtn = document.querySelector('.addBtn');
const listsDiv = document.querySelector('.lists');

let lists = [];


function getDataLS() {
    return JSON.parse(localStorage.getItem("todos")) || []
}

function addDataLS(todo) {
    return localStorage.setItem("todos", JSON.stringify(todo))
}

function showTodoList() {
    lists = getDataLS();
    lists.forEach((curTodo) => {
        const newTodoLi = document.createElement('li')
        newTodoLi.innerHTML = curTodo;
        listsDiv.appendChild(newTodoLi);
    });
}

showTodoList();

addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    lists = getDataLS();
    let newTodo = input.value.trim();
    console.log(newTodo);


    if (newTodo.length !== 0 && !lists.includes(newTodo)) {
        console.log(typeof lists);
        lists.push(newTodo);

        addDataLS(lists);

        const newTodoLi = document.createElement('li')
        newTodoLi.innerHTML = input.value;
        listsDiv.appendChild(newTodoLi);

    }
    input.value = "";
})

// function addTodo() {
//     input.value;
// }


