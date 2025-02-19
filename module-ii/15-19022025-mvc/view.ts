import { onAddTodoSubmit, onToggleTodoClick } from "./controller.js";
import { getTodos, onTodosUpdate } from "./model.js";

export function init(addTodoForm: HTMLFormElement, todoList: HTMLUListElement) {
    addTodoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(addTodoForm, e.submitter);

        try {
            onAddTodoSubmit(formData);
            addTodoForm.reset();
        } catch (error) {
            console.error(error);
        }
    });

    todoList.addEventListener("click", function (e) {
        const todoId = (e.target as HTMLElement).dataset.todoId;

        if (!todoId) {
            return;
        }

        try {
            onToggleTodoClick(todoId);
        } catch (error) {
            console.error(error);
        }

    });

    onTodosUpdate(renderTodos);

    function renderTodos() {
        const todos = getTodos();

        todoList.innerHTML = "";

        for (const todo of todos) {
            const li = document.createElement("li");

            li.textContent = todo.content;
            li.dataset.todoId = todo.id;
            
            if (todo.status === "Completed") {
                li.classList.add("completed");
            }

            todoList.append(li);
        }
    }
}
