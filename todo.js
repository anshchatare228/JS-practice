const todoList = [];

function addTask(){
    let name = document.querySelector('.js-input').value;
    todoList.push(name);
    console.log(todoList); 
    document.querySelector('.js-input').value = '';
    return name;
}

function addOnEnter(){
    if(event.key === 'Enter'){
        addTask();
    }
}