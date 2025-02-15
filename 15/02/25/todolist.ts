interface todo {
    id: number;
    task: string;
    completed: boolean;
}

let todos: todo[] = [];

function addTodo(todo: todo) {
    todos.push(todo);
    console.log(`Todo added:`, todo);
}

