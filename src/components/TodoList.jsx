import { useState } from "react";
import TodoListItem from "./TodoListItem"

export default function TodoList() {

    const todos = [
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: false,
            dueDate: '5:23 AM, 01/06/2022'
        },
        {
            id: 2,
            text: 'Meeting at School',
            completed: false,
            dueDate: '6:00 AM, 02/06/2022'
        },
        {
            id: 3,
            text: 'Create a react project',
            completed: false,
            dueDate: '1:23 PM, 10/06/2022'
        },
        {
            id: 4,
            text: 'Create a Todo App',
            completed: false,
            dueDate: '4:23 AM, 11/06/2022'
        },

    ]

    const [tasks, setTasks] = useState(todos);
    const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
    return (
        <div className="todo-list-container">
            {tasks.map((task) => (
                <TodoListItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    )
}