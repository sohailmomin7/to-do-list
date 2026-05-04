let taskEl=document.getElementById("task-btn")
let addBtn=document.getElementById("add-btn")
let tasksList=document.getElementById("tasks")

addBtn.addEventListener("click", function(){
    let taskValue=taskEl.value
    tasksList.innerHTML+=`<li><input${taskValue}</li>`
    taskEl.value=""
})