import './App.css';
import AddTask from './components/AddTask'
import React, {useState} from 'react';
import TaskList from './components/TaskList';




function App() {

  const [taskList, setTaskList] = useState([]);

const addTaskHandler = (task, priority) => {
  setTaskList((taskList) => {
       return [...taskList, {task: task, priority: priority}]
  },
  console.log(taskList)
  );
} 

  return (
    <div className = "App">
     <h1>Jay's To-Do List </h1>
     <AddTask onAddTask = {addTaskHandler}/>
     <TaskList tasks = {taskList}/>
     </div>
  );
}

export default App;
