import { useState } from "react"
import { todos } from "../data/todos";

export default function CreateTodo({ todo, addTodo }) {
    const [showInput, setShowInput] = useState(false);
    const handleClick = () => setShowInput(!showInput);

    function addNewTodo() {
        addTodo(todo.id)
    }
    return (
        <>
            <button
                onClick={handleClick}
                className="add-btn"
            >Add Task</button>
            {showInput && (
                <div className="create-todo">
                    <label>
                        Task name: <input
                            type="text"
                        />
                    </label>
                    <label>
                        Due date: <input
                            type="datetime-local"
                            name="myCheckbox" />
                    </label>
                    <button
                        className="create-btn"
                        onClick={() => addNewTodo()}
                    >Create</button>
                </div>
            )}
        </>
    )

}