import { useState } from "react";
import TodoListItem from "./TodoListItem"
import { todos } from "../data/todos";
import CreateTodo from "./CreateTodo";
export default function TodoList() {

    const [tasks, setTasks] = useState(todos);
    const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
    const toggleCompleted = (id) => setTasks(tasks.map((task) => task.id === id
        ? { ...task, completed: !task.completed }
        : task));

        
    const newTodo =
    {
        id: 5,
        text: 'Bubu',
        completed: false,
        dueDate: '5:23 AM, 01/06/2022'
    }

    const addNewTask = () => {

        const newTask = {
            id: newTodo.id,
            text: newTodo.text,
            completed: false,
            dueDate: newTodo.dueDate
        };
    
        setTasks([...tasks, newTask]);
    };

    return (
        <>
            <CreateTodo
                todo={newTodo}
                addTodo={addNewTask}
            />
            <div className="todo-list-container">
                {tasks.map((task) => (
                    <TodoListItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
            </div>
        </>
    )
}