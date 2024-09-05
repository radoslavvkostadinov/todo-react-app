import { useState } from "react"

export default function CreateTodo({ addTodo, onNewTaskName, onTaskDate, taskName, date }) {
    const [showInput, setShowInput] = useState(false);
    const handleClick = () => setShowInput(!showInput);

    function handleTodoName(e) {
        onNewTaskName(e.target.value)
    }

    function handleTodoDate(e) {
        onTaskDate(e.target.value)
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
                        Task name:
                        <input
                            type="text"
                            value={taskName}
                            onChange={handleTodoName}
                        />
                    </label>
                    <label>
                        Due date: <input
                            id="a"
                            type="datetime-local"
                            value={date}
                            onChange={handleTodoDate}
                            name="myCheckbox"
                        />
                    </label>
                    <button
                        className="create-btn"
                        onClick={addTodo}
                    >Create</button>
                </div>
            )}
        </>
    )

}