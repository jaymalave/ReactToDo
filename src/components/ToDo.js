import React from "react";
import './ToDo.css'

const ToDo = (props) => {
  
    const deleteHandler = () => {
        props.setList(props.list.filter((el) => el.task !== props.data.task))
    }

    return (
        <React.Fragment className = 'fragment'>
        <div className = 'task-card'>
         {props.data.task} {props.data.priority}
         <button onClick = {deleteHandler} className='done-btn'>Done</button>
        </div>
        </React.Fragment>
    );
}

export default ToDo;