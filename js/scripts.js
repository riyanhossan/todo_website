let inputs = document.getElementById("input");
let todoList = document.querySelector(".task-list");

function toDo(){
    if(inputs.value === ''){
        return alert("Can't be Empty");
    }
    let li = document.createElement('li');
    li.innerHTML = inputs.value;
    todoList.appendChild(li);
    
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    saveData();
    inputs.value = '';
}


todoList.addEventListener("click", function(el){
    console.log(el.target.tagName);
    if(el.target.tagName === "LI"){
        el.target.classList.toggle('checked');
        saveData();
    }
    else if(el.target.tagName === "SPAN"){
        el.target.parentElement.remove();
        saveData();
    }
}, false)



function saveData(){
    localStorage.setItem("data", todoList.innerHTML)
}

function showData(){
    todoList.innerHTML = localStorage.getItem("data");
}
showData();