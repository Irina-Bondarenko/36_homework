"use strict";

function view () {

    const createTodoItem = (data) => {
        const wrapperElement = document.createElement('div');
        wrapperElement.classList.add('col-4');

        wrapperElement.innerHTML = `<div class="taskWrapper">
            <div class="taskHeading">${data.title}</div>
            <div class="taskDescription">${data.description}</div>
            </div>`;

        return wrapperElement;
    }

    return {

        form: null,
        todosContainer: null,


        renderTodoItem(data) {

            const itemTemplate = createTodoItem(data);

            this.todosContainer.append(itemTemplate);
            console.log(itemTemplate)

        },


        init(formElement, todosContainer) {

            this.form = formElement;
            this.todosContainer = todosContainer;


        },


    }
}
