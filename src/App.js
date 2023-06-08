import './App.css';
import {useState} from 'react'
import {Task} from './Task';


function App() {

  const [todoList,setToDoList] = useState([]);
  const [newTask,setNewTask] = useState("");

  const getInputEvent = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id+1,
      taskName : newTask,
      completed: false
    }
    setToDoList([...todoList,task]);
  }

  // const deleteTask = (taskList) => {
  //   const newToDoList = todoList.filter((task) => {
  //     if (task === taskList) {
  //       return false;
  //     }
  //     else {
  //       return true;
  //     }

  //   });
  //   setToDoList(newToDoList);
  // }

  const deleteTask = (id) => {
    setToDoList(todoList.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setToDoList(todoList.map((list,key) => { return list.id === id ? {...list, completed: true} : list } ));
  }
  
  return (
    <div className="App">
      <input onChange={getInputEvent}/>
      <button onClick={addTask}>Add Task</button>
      {todoList.map((list,key) => {
        return(
        <Task taskName={list.taskName} id={list.id} deleteTask={deleteTask} completeTask={completeTask} completed={list.completed} key={key}/>
        );
        // return <div>
        //   <p key={key}>{list.taskName}</p>
        //   <button onClick={() => deleteTask(list.id)}>X</button>
        //   </div>
      })}
     
      
    </div>
  );
}

export default App;
