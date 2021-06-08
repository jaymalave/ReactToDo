import React from "react";
import './TaskList.css'

const TaskList = (props) => {
    return (
        <div>
               
           {props.tasks.map((task) => (
            <div className = 'task-card'>
               {task.task} [{task.priority}]    
            
            </div>
               ))}
       
        </div>
    );
}

export default TaskList;