let taskEl = document.getElementById("task-btn")
let addBtn = document.getElementById("add-btn")
let tasksList = document.getElementById("tasks")
let clearBtn = document.getElementById("clear-btn")
let taskValue = JSON.parse(localStorage.getItem("tasks")) || []

function renderTasks() {
    tasksList.innerHTML = ""
    for (let i = 0; i < taskValue.length; i++) {
        let checkedAttr = taskValue[i].done ? "checked" : ""
        tasksList.innerHTML += `
            <li>
                <input type="checkbox" ${checkedAttr} onchange="toggleTask(${i})">
                ${taskValue[i].text}
            </li>
        `
    }
}

addBtn.addEventListener("click", function () {
    if (taskEl.value.trim() !== "") {
        taskValue.push({ text: taskEl.value, done: false })
        localStorage.setItem("tasks", JSON.stringify(taskValue))
        renderTasks()
        taskEl.value = ""
    }
})

function toggleTask(index) {
    taskValue[index].done = !taskValue[index].done
    localStorage.setItem("tasks", JSON.stringify(taskValue))
    renderTasks()
}

clearBtn.addEventListener("click", function () {
    taskValue = []
    tasksList.innerHTML = ""
    localStorage.removeItem("tasks")
})

renderTasks()
