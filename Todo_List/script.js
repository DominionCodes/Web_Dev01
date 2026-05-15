//Variables for input, Button add, and Todo list 
let InputTodo = document.getElementById('todo-input');
let BtnAdd = document.getElementById('add-button');
let ListTodo = document.querySelector('.todo-lists'); // Fixed: querySelector gets the specific element

//Function for BtnAdd controls everything
BtnAdd.addEventListener('click', () => {
    //the if statement, given me the ability to play on 2 statement, what should happen if it's fails and what to say, else should return the right thing 
    if (InputTodo.value.trim().length === 0) {
        //.value is to get the written sentence from the input 
        alert('Enter a New Task!!!');
    } else {
        ListTodo.innerHTML += `
            <div class="task">
                <span class="taskname">
                    ${InputTodo.value}
                </span>
                <button class="delete"> 
                ❌
                </button>
            </div>
        `;

        // Clear input after adding task
        InputTodo.value = '';
    }
});

// Use event delegation for dynamically added tasks
ListTodo.addEventListener('click', (e) => {
    // Check if delete button was clicked
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove(); // Removes the task div
    }
    // Check if any other part of the task was clicked to toggle 'completed'
    else if (e.target.closest('.task')) {
        e.target.closest('.task').classList.toggle('completed'); // Toggles line-through
    }
});