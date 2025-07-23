const listContainer = document.getElementById("todo-list");
const inputContainer = document.getElementById("todo-input");
const addButton = document.getElementById("btn");
const form = document.querySelector("form");



form.addEventListener("submit", addTask);

addButton.addEventListener("click", addTask);


function addTask(event){
    event.preventDefault();

    if(inputContainer.value.trim() === ""){

        alert("Please enter a task");

    } else{


        const task = document.createElement("li");
        task.textContent = inputContainer.value;
        listContainer.appendChild(task);
        inputContainer.value = "";

        let span = document.createElement("span");
        span.innerHTML = "\u274C";
        task.appendChild(span);
        saveData();
    }

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function  saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    const data = localStorage.getItem("data");
    if(data){
        listContainer.innerHTML = data;
    }

}

showData();