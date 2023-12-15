import React from 'react';
import { ITask } from '../interfaces';


interface Props {
    task: ITask;
    deleteTask(taskIdToDelete: number): void;
    completeTask(taskIdToComplete: number): void;
}

const TodoTask = ({ task, deleteTask, completeTask }: Props) => {

    const taskStyle = {
        textDecoration: task.completed ? 'line-through' : 'none',
    };

    return (

        <div className="task">
            <div className="content">
                <input type='checkbox' className="check-box" onClick={() => completeTask(task.id)} />

                <div className="prevent-select" style={taskStyle}>
                    {task.taskName}
                </div>
                <button className="delete-button" onClick={() => { deleteTask(task.id) }}>X</button>
            </div>
        </div>
    )
}



export default TodoTask