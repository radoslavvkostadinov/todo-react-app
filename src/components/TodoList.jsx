import TodoListItem from "./TodoListItem"

export default function TodoList() {

    const data = [
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: false,
            date: '5:23 AM, 01/06/2022'
        },
        {
            id: 2,
            text: 'Meeting at School',
            completed: false,
            date: '2023-10-02'
        },
        {
            id: 3,
            text: 'Create a react project',
            completed: false,
            date: '5:23 AM, 01/06/2022'
        },
        {
            id: 4,
            text: 'Create a Todo App',
            completed: false,
            date: '2023-10-02'
        },
        
    ]

    return (
        <div className="todo-list-container">
            <TodoListItem
                task={data[3]}
            />
        </div>
    )
}