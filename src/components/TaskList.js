import React from "react";
import ToDo from './ToDo'
import './TaskList.css'
import { PromiseProvider } from "mongoose";

const TaskList = (props) => {
    return (
        <div>  
           {props.tasks.map((task) => (
                   <ToDo data = {task} list = {props.list} setList = {props.setList}/>
               ))}
       
        </div>
    );
}

export default TaskList;