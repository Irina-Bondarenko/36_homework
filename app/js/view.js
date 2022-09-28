"use strict";

function view () {

    const createTodoItem = (data) => {
        const wrapperElement = document.createElement('div');
        wrapperElement.classList.add('col-4');

        wrapperElement.setAttribute('data-todo-id', data.id)

        wrapperElement.innerHTML = `<div class="taskWrapper">
            <div class="taskHeading">${data.title}</div>
            <div class="taskDescription mb-3">${data.description}</div>
            <button class="btn btn-danger remove">Remove</button>
            </div>`;

        return wrapperElement;
    }

    return {

        form: null,
        todosContainer: null,


        renderTodoItem(data) {

            const itemTemplate = createTodoItem(data);

            this.todosContainer.append(itemTemplate);

        },

        removeTodoItem(id) {
            document.querySelector(`[data-todo-id="${id}"]`).remove();
        },

        clearForm() {
            this.form.reset();

        },


        init(formElement, todosContainer) {

            this.form = formElement;
            this.todosContainer = todosContainer;


        },


    }
}
