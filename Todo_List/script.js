
//Variables for input, Button add, and Todo list 
let InputTodo = document.getElementById('todo-input');
let BtnAdd = document.getElementById('add-button');
let ListTodo = document.getElementsByClassName('todo-lists')


//Function for BtnAdd controls everything
BtnAdd.addEventListener('click', () => {
    //the if statement, given me the ability to play on 2 statement, what should happen if it's fails and what to say, else should return the right thing 
    if (InputTodo.value.length == 0) {
        //.value is to get the written sentence from the input 
        alert('Enter a New Task!!!')
    } else {
        ListTodo.innerHTML += `
            <div class = "task">
                <span id = "taskname">
                    ${InputTodo.value}
                </span>
                <button class = "delete"> 
                ❌
                </button>
            </div>
        `
    }

});
let deleteTask = document.getElementsByClassName('delete')
for (let D = 0; D < deleteTask.length; D++) {
    deleteTask[D].addEventListener('click', () => {
        this.parentNode.remove();
    })

}
let CureentTask = document.getElementById('task');
for (let D = 0; D < CureentTask.length; D++) {
    CureentTask[D].addEventListener('click', () => {
        this.parentNode.toggle('compw');
    })

}
console.log(InputTodo.value)