let inputTodo = document.querySelector("#todo-input")
let btnAdd = document.querySelector("#add-button")
let todoList = document.querySelector(".todo-lists")
btnAdd.addEventListener("click", () => {
    if (inputTodo.value.length == 0) {
        alert("please enter a new todo item")
    } else{
        let document = {
            inputTodo: inputTodo.value
        }
        todoList.innerHTML +=
        `
            <div class="task">
                <span id="taskname completed">
                    ${document.inputTodo}
                </span>
                <button class="delete">Delete</button>
            </div>
        `
        
        // Add delete functionality to all delete buttons
        let deleteButtons = todoList.querySelectorAll(".delete")
        deleteButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.target.parentElement.remove()
            })
        })
        
        // Clear input field after adding
        inputTodo.value = ""
    }
})

todoList.addEventListener("click", (e) => {
    const task = e.target.closest(".task")
    if (!task) return

    // If delete button clicked, remove the task
    if (e.target.classList.contains("delete")) {
        task.remove()
        return
    }

    // Otherwise toggle completed class on the task element
    task.classList.toggle("completed")
})

// addBtn.addEventListener("click", () => {
    
//     if (inputTodo.value.length === 0) {
//         alert("Please enter a todo item.");
//     } else {
//         let li = document.createElement("li");
//         li.innerText = todoText;
//         todoList[0].appendChild(li);
//         inputTodo.value = "";
//     }    // return;
    
// // });
// addBtn.addEventListener("click", () => {

// })
