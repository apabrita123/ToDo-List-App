const inputBox = document.querySelector("#input-box");
const btn = document.querySelector(".row button");
const listContainer = document.querySelector("#list-container");

function addTask() {
  if (inputBox.value == "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#x2715;";
    li.appendChild(span);
    saveTasks();
  }
  inputBox.value = "";
}

btn.addEventListener("click", () => {
  addTask();
});


listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
});

function saveTasks(){
    localStorage.setItem("data",listContainer.innerHTML);
};

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();