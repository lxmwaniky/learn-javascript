const todoList = [];

function addItem(){
        const inputElement = document.querySelector('.to-do-item');
        const item2Do = inputElement.value;
        todoList.push(item2Do);
        console.log(todoList);
        inputElement.value = '';
};