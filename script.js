const inputBar = document.getElementById("input-bar");
const listContainer = document.getElementById("list-container");


function addTask() {
    if (inputBar.value === ''){
        alert("Please write a message");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBar.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBar.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

window.addEventListener("load", function () {
    const saveData = this.localStorage.getItem("data");
    if (saveData) {
        listContainer.innerHTML = saveData;
    }
})

inputBar.addEventListener("keyup", function (e) {
    e.preventDefault();
    if (e.key === "Enter" || e.key === "Return") {
        addTask();
    }
});

function resetList() {
    listContainer.innerHTML = '';
    saveData();
}