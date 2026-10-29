let task_btn= document.getElementById("submit-task");
task_btn.addEventListener("click", function(e) {
    e.preventDefault();
    let task = document.getElementById("task").value;
    let description= document.getElementById("description").value;
    let priority = document.getElementById("priority").value;
    let category = document.getElementById("categories").value;
    let dueDate = document.getElementById("date").value;
    if (!task || !description || !priority || !category || !dueDate) {
        let div = document.getElementById("submit-task-div");
            let npara = document.createElement("p");
            npara.innerHTML = "Please fill in all fields.";
            div.appendChild(npara);
        setTimeout(function() {
            div.removeChild(npara);
        }, 2000);
    }
    else if(localStorage.getItem(task))
    {
        let div = document.getElementById("submit-task-div");
            let npara = document.createElement("p");
            npara.innerHTML = "Please enter a unique task name";
            div.appendChild(npara);
        setTimeout(function() {
            div.removeChild(npara);
        }, 2000);
    }
    else
    {
        let taskkey = task;
        let taskData = `Description: ${description}, Priority: ${priority}, Category: ${category}, Due Date: ${dueDate}`;
        localStorage.setItem(taskkey, taskData);
        let div = document.getElementById("submit-task-div");
        let npara = document.createElement("p");
        npara.innerHTML = "Task added successfully.";
        div.appendChild(npara);
      setTimeout(function() {
        document.getElementById("task-form").reset();
        div.removeChild(npara);
    }, 2000);
   }});
 
let del_btn = document.getElementById("delete-button");
del_btn.addEventListener("click", function(e) {
    e.preventDefault();
    let taskToDelete = document.getElementById("delete-task-input").value;
    if (!taskToDelete) {
        let div = document.getElementById("delete-div");
        let npara = document.createElement("p");
        npara.innerHTML = "Please enter a task to delete.";
        div.appendChild(npara);
        setTimeout(function() {
            div.removeChild(npara);
        },2000);
    }
    else if(localStorage.getItem(taskToDelete) === null)
    {
         let div = document.getElementById("delete-div");
        let npara = document.createElement("p");
        npara.innerHTML = "Task not found.";
        div.appendChild(npara);
        setTimeout(function() {
            div.removeChild(npara);
            document.getElementById("delete-form").reset();
        },2000);
       
    }
    else
    {
      localStorage.removeItem(taskToDelete);
         let div = document.getElementById("delete-div");
        let npara = document.createElement("p");
        npara.innerHTML = "Task deleted successfully.";
        div.appendChild(npara);
        setTimeout(function() {
            div.removeChild(npara);
            document.getElementById("delete-form").reset();
        },2000);
    }
});
let search_btn = document.getElementById("search-button");
search_btn.addEventListener("click", function(e) {
    e.preventDefault();
    let searchTerm = document.getElementById("search").value;
    if (!searchTerm) {
        let div = document.getElementById("search-div");
        let npara = document.createElement("p");
        npara.innerHTML = "Please enter a task to search.";
        div.appendChild(npara);
        setTimeout(function() {
            div.removeChild(npara);
        }, 2000);
    }
    else if(localStorage.getItem(searchTerm) === null)
    {
        let div = document.getElementById("search-div");
        let npara = document.createElement("p");
        npara.innerHTML = "Task not found.";
        div.appendChild(npara);
        setTimeout(function() {
            div.removeChild(npara);
            document.getElementById("search-form").reset();
        }, 2000);
    }
    else
       { let taskData = localStorage.getItem(searchTerm);
        let div = document.getElementById("search-div");
        let npara = document.createElement("p");
        npara.innerHTML = `Task: ${searchTerm}, ${taskData}`;
        div.appendChild(npara);
        setTimeout(() => {
            document.getElementById("search").value="";
            div.removeChild(npara)
        }, 7000);
        }
});
let list_btn = document.getElementById("list-button")
list_btn.addEventListener("click", function(e) {
    e.preventDefault();
    for(let i = 0; i<localStorage.length; i++)
    {
        let key = localStorage.key(i)
        let value = localStorage.getItem(key)
        let div = document.getElementById("display");
        let nh3 = document.createElement("h3");
        nh3.innerHTML = key
        div.appendChild(nh3)
        let npara = document.createElement("p");
        npara.innerHTML = value;
        div.appendChild(npara);

    }
    setTimeout(() => {
        let div = document.getElementById("display");
        div.innerHTML="";
    }, 15000);
});

