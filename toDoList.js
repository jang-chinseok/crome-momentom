const displayUser = document.querySelector(".displayUser");
const userForm = document.querySelector(".userForm");
const userInput = document.querySelector(".userInput");
const resetBtn = document.getElementById("resetBtn");
const USER_LS = "youserName";

function getUserName(event){
    event.preventDefault();
    const currentValue = userInput.value;
    saveUserName(currentValue);
    displayUserName(currentValue);
}

function saveUserName(name) {
    localStorage.setItem(USER_LS, name);
}


function askForUserName(){
    userForm.classList.add('view');
    userForm.addEventListener("submit", getUserName);
}

function displayUserName(text){
    userForm.classList.remove('view');
    displayUser.classList.add('view');
    displayUser.innerHTML = text;
}

function loadUserName(){
    const userName = localStorage.getItem(USER_LS);
    if(userName === null){
        askForUserName();
    }
    else{
        // not null
        displayUserName(userName);
    }
}


function handleClick(event) {
    displayUser.classList.remove('view');
    localStorage.removeItem(USER_LS);
    askForUserName();
    
}





const toDoForm = document.querySelector(".ListToDo"),  
      toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js_toDoPending"); 
 


const TODOS_LS = "toDos";

let toDos = [];

function savelist(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function dleToDo(event){
 
    const btn =event.target;
    const li =btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    toDos =cleanToDos
    savelist();

}
function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = TODOS_LS.length +1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",dleToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    
    li.id = newId;
    toDoList.appendChild(li);
    const pendingOBJ ={
        text: text, id: newId
    }
    toDos.push(pendingOBJ);
    savelist();

}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value="";

}


function loadlist(){
const loadedlist = localStorage.getItem(TODOS_LS);
if(loadedlist!==null){
    const parsPending = JSON.parse(loadedlist)
    parsPending.forEach(function(toDo){
        paintTodo(toDo.text);
    });
}

}
function init(){
    loadUserName();
    resetBtn.addEventListener("click", handleClick);
    loadlist();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();






