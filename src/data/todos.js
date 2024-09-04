let id = 0;
const idGenerator = () => (() => id++)();

export const todos = [
    {
        id: idGenerator(),
        text: 'Doctor Appointment',
        completed: false,
        dueDate: '5:23 AM, 01/06/2022'
    },
    {
        id: idGenerator(),
        text: 'Meeting at School',
        completed: false,
        dueDate: '6:00 AM, 02/06/2022'
    },
    {
        id: idGenerator(),
        text: 'Create a react project',
        completed: false,
        dueDate: '1:23 PM, 10/06/2022'
    },
    {
        id: idGenerator(),
        text: 'Create a Todo App',
        completed: false,
        dueDate: '4:23 AM, 11/06/2022'
    },

]