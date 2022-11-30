{
    const tasks = [
        { content: "zadanie" },
        { content: "zadanie1" },
    ];

    const render = () => {
        const newTask = document.querySelector(".js-form__field");
        newTask.focus();

        let htmlString = "";
        
        for (const task of tasks) {
            htmlString += `
            <li class="list__item js-list__item">
            <button class="list__button--green">Zrobione?</button>
            ${task.content}
            <button class="list__button--red">usuń</button>
            </li>
            <hr>`
        };
        document.querySelector(".js-list").innerHTML = htmlString;

    };

    const addNewTask = (fieldValue) => {
        tasks.push({
            content: fieldValue,
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const input = document.querySelector(".js-form__field");
        const fieldValue = input.value.trim();

        if (fieldValue !== "") {
            addNewTask(fieldValue);
        };
        render();
    };




    const init = () => {

        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

    };

    init();
}