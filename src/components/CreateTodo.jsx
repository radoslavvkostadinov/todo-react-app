import { useState } from "react"
import PropTypes from 'prop-types';

export default function CreateTodo({ addTodo, onTaskName, onTaskDate, taskName, date }) {

    const [showInput, setShowInput] = useState(false);
    const handleClick = () => setShowInput(!showInput);

    function handleTodoName(e) {
        onTaskName(e.target.value)
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
                        <span>{' '}</span>
                        <input
                            className="name-input"
                            type="text"
                            value={taskName}
                            onChange={handleTodoName}
                        />
                    </label>
                    <label>
                        Due date:
                        <span>{' '}</span>
                        <input
                            className="date-input"
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

CreateTodo.propTypes = {
    taskName: PropTypes.string,
    onTaskName: PropTypes.func,
    addTodo: PropTypes.func,
    taskDate: PropTypes.string,
    onTaskDate: PropTypes.func,
    date: PropTypes.string
};