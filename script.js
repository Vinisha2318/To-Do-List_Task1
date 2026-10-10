
let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");
let count = document.getElementById("count");

function updateCount() {
    count.textContent = list.children.length;
}

function addTask(task, completed = false) {
    task = task || input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    let span = document.createElement("span");
    span.textContent = task;

    if (completed) {
        span.classList.add("done");
    }

    checkbox.onchange = function () {
        span.classList.toggle("done", checkbox.checked);
    };

    let button = document.createElement("button");
    button.textContent = "Delete";

    button.onclick = function () {
        li.remove();
        updateCount();
    };

    li.append(checkbox, span, button);
    list.appendChild(li);

    input.value = "";
    updateCount();
}

document.getElementById("addBtn").onclick = function () {
    addTask();
};

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

