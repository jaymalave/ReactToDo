import React, { useRef } from "react"
import './AddTask.css' 

const AddTask = (props) => {
     
    const taskInputRef = useRef();
    const priorityInputRef = useRef();

    const addTaskHandler = (event) => {
        event.preventDefault();

      const enteredTask = taskInputRef.current.value;
      const enteredPriority = priorityInputRef.current.value;

      props.onAddTask(enteredTask, enteredPriority);
      taskInputRef.current.value = '';
      priorityInputRef.current.value = '';

    }

    return (
      <div className = 'add-task'>
          <form onSubmit = {addTaskHandler} className = 'task-form'>
          <label htmlFor="task" className = "label">Task</label>   
           <input id="task" type="text" className = 'task-input'ref={taskInputRef}/>
           <label htmlFor="priority" className = "label">Priority No.</label>
           <input id="priority" type="number" className = 'priority-input' ref={priorityInputRef}/>
           <button type="submit" className = 'button'>Add Task</button> 
          </form>

      </div>
    );

}

export default AddTask;
