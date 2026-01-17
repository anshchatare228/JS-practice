const toDoList = [];

function addTask(){
    let name = document.querySelector('.js-input').value;
    let dueDate = document.querySelector('.js-due-date').value;
    toDoList.push({
        name: name,
        dueDate: dueDate,
    });
    
    renderToDoList();

    document.querySelector('.js-input').value = '';
    return name;
}

//this function basically loops through the array and take every index, converts it into a HTML syntax using <p></p> tags and then again pu it into the div class, we took div element bacause it takes up the whole viewpage so the lists 'Stacks' one above another.
function renderToDoList(){
    let toDoHTML = '';
    for(let i=0; i < toDoList.length ; i++ ){ 
    let html = `

        <span class="js-task-text">${toDoList[i].name}</span>
        <span class="css-due-date">${toDoList[i].dueDate}</span>
        <button class="js-delete-button" 
        onclick="toDoList.splice(${i},1);                
        renderToDoList();
        ">Delete</button>
    
        ` //The above block adds a deleat button which on clicked spliced the index on which it is clicked 
        toDoHTML += html;
    }
    console.log(toDoHTML);
    document.querySelector('.js-print').innerHTML = toDoHTML;
}

//This function basically runs the addtask but when the Enter key is pressed (just a feature)
function addOnEnter(){
    if(event.key === 'Enter'){
        addTask();
    }
}