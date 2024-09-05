let id = 0;
export const idIncrementer = () => (() => id++)();

export const todos = [
    {
        id: idIncrementer(),
        text: 'Doctor Appointment',
        completed: false,
        dueDate: '15:23, 01/06/2022'
    },
    {
        id: idIncrementer(),
        text: 'Meeting at School',
        completed: false,
        dueDate: '6:00, 02/06/2022'
    },
    {
        id: idIncrementer(),
        text: 'Create a react project',
        completed: false,
        dueDate: '01:23, 10/06/2022'
    },
    {
        id: idIncrementer(),
        text: 'Create a Todo App',
        completed: false,
        dueDate: '4:23, 11/06/2022'
    },

]