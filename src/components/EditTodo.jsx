import { useEffect, useState } from "react"

export default function EditTodo({ task, updateTask, cancelEdit }) {

    const [taskName, setTaskName] = useState(task.text);
    const [taskDate, setTaskDate] = useState(task.dueDate);


    useEffect(() => {
        setTaskName(task.text);
        setTaskDate(task.dueDate);
    }, [task])


    const handleSave = () => {
        const updatedTask = {
            ...task,
            text: taskName,
            dueDate: taskDate
        };

        updateTask(updatedTask);
    }

    return (
        <div className="edit-todo">
            <label>
                Task name:
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
            </label>
            <label>
                Due date:
                <input
                    type="datetime-local"
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                />
            </label>
            <div className="save-cancel-btn">
                <button className="save-btn" onClick={handleSave}>Save</button>
                <button className="cancel-btn" onClick={cancelEdit}>Cancel</button>
            </div>
        </div>
    )

}