const taskinput = document.getElementById('txt-area')
const buttontdl = document.getElementById('add-btn')
const listtdl = document.getElementById('todo-lst')
arr = []
function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// adding todoList
function addTodo() {

    if (taskinput.value === '') return

    if(arr.includes(taskinput.value) == true){
        alert("cannot have a duplicate task")
        return
    }

    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = taskinput.value
    arr.push(item.innerText)
    console.log(arr)
    itemall.appendChild(item)


    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    listtdl.appendChild(itemall)
    taskinput.value = ''
}

// checking and delete todoList 
function okdel(e) {
    const item = e.target
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }
    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)