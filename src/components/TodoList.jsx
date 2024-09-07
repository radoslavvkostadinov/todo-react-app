import { useState } from "react";
import TodoListItem from "./TodoListItem"
import { idIncrementer, todos } from "../data/todos";
import CreateTodo from "./CreateTodo";
import { toast } from "react-toastify";
import EditTodo from "./EditTodo";
import sponge from '../images/sponge-bob.gif';
export default function TodoList() {


    const [tasks, setTasks] = useState(todos);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDate, setNewTaskDate] = useState('');
    const [edit, setEdit] = useState(null);
    const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
    const toggleCompleted = (id) => setTasks(tasks.map((task) => task.id === id
        ? { ...task, completed: !task.completed }
        : task));
    const editTask = (id) => setEdit(tasks.find((task) => task.id === id));

    const newTodo =
    {
        id: idIncrementer(),
        text: newTaskName,
        completed: false,
        dueDate: newTaskDate
    }

    const addNewTask = () => {

        if (!newTodo.text) {
            toast.error('Empty task cannot be added.');
            return
        }

        if (!newTodo.dueDate) {
            toast.error('Please select a due date.');
            return;
        }

        const [year, month, rest] = newTodo.dueDate.split('-');
        const [day, time] = rest.split('T');
        let completeDate = `${time}, ${month}/${day}/${year}`;

        const newTask = {
            id: newTodo.id,
            text: newTodo.text,
            completed: false,
            dueDate: completeDate
        };

        setTasks([...tasks, newTask]);
        setNewTaskName('');
        setNewTaskDate('');
    };


    const updateTask = (updatedTask) => {
        setTasks(tasks.map((task) => task.id === updatedTask.id ? updatedTask : task));
        setEdit(null);
    };
    return (

        <div className="whole-todo">
            {
                tasks.length > 0 ?
                    (<div className="todo-list-container">
                        <CreateTodo
                            addTodo={addNewTask}
                            onTaskName={setNewTaskName}
                            onTaskDate={setNewTaskDate}
                            taskName={newTaskName}
                            date={newTaskDate}
                        />
                        {edit && (<EditTodo
                            task={edit}
                            updateTask={updateTask}
                            cancelEdit={() => setEdit(null)}
                        />)}
                        {tasks.map((task) => (
                            <TodoListItem
                                key={task.id}
                                task={task}
                                deleteTask={deleteTask}
                                toggleCompleted={toggleCompleted}
                                editTask={editTask}
                            />
                        ))}
                    </div>) : (
                        <div className="image-container">
                            <img src={sponge} />
                        </div>
                    )
            }

        </div >
    )
}