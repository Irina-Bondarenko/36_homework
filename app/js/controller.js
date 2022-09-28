"use strict";


// const setEvent = (event, callback) => {
//     event.preventDefault();
//     event.stopPropagation();
//
// }



function controller (view, model, payload) {

    const formSelector = payload.formSelector;
    const todosContainerSelector = payload.todosContainerSelector;
    const form = document.querySelector(formSelector);
    const todosContainer = document.querySelector(todosContainerSelector);

    model.init(formSelector);
    view.init(form, todosContainer);

    /*
     todo validation
    */


    const fetchFormData = (inputs) => {
        let data = inputs;
        if(inputs instanceof NodeList) {
            data = Array.from(inputs);
        }

        return data.reduce((acc, item) => {
            acc[item.name] = item.value;

            return acc;
        }, {});

    }

    const submitHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const inputs = form.querySelectorAll('input, textarea');
        const data = model.setData(fetchFormData(inputs));

        if(!data.success) throw new Error("Something wrong with saving data");

        view.renderTodoItem(data.savedData);
        view.clearForm();

    }

    const loadHandler = (event) => {
        const todoItems = model.getData();
        if(!todoItems) return;

        todoItems.forEach(item => view.renderTodoItem(item));

    }

    const removeTodoHandler = (event) => {
        event.stopPropagation();

        if (!event.target.classList.contains("remove")) return;

        let todoId = event.target.closest('[data-todo-id]').getAttribute(`data-todo-id`);
        todoId = Number(todoId)
        model.removeTodoItem(todoId);

    }


    form.addEventListener("submit", submitHandler);
    window.addEventListener("DOMContentLoaded", loadHandler);
    todosContainer.addEventListener("click", removeTodoHandler);

    return {};

};
