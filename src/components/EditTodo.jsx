import { useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function EditTodo({ task, updateTask, cancelEdit }) {

    const [taskName, setTaskName] = useState(task.text);
    const [taskDate, setTaskDate] = useState(task.dueDate);


    useEffect(() => {
        setTaskName(task.text);
        setTaskDate(task.dueDate);
    }, [task])


    const handleSave = () => {

        if (!taskName) {
            toast.error('Empty task cannot be saved.');
            return;
        }

        const [year, month, rest] = taskDate.split('-');

        if (!rest) {
            toast.error('Please select a due date.');
            return;

        }

        const [day, time] = rest.split('T');
        let completeDate = `${time}, ${month}/${day}/${year}`;

        const updatedTask = {
            ...task,
            text: taskName,
            dueDate: completeDate
        };

        updateTask(updatedTask);
    }

    return (
        <div className="edit-todo">
            <label>
                Task name:
                <span>{' '}</span>
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
            </label>
            <label>
                Due date:
                <span>{' '}</span>
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