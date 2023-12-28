const todoList = [];

rendertodoList();

function rendertodoList(){
        let todoListHTML = '';
        for (let i = 0; i < todoList.length; i++){
                const todo = todoList[i];
                const html = `<p>${todo}</p>`;
                todoListHTML += html;
        }
        document.querySelector('.js-to-do-list').innerHTML = todoListHTML;
}

function addItem(){
        const inputElement = document.querySelector('.to-do-item');
        const item2Do = inputElement.value;
        todoList.push(item2Do);
        console.log(todoList);
        inputElement.value = '';
        rendertodoList();
};