import React, {FC ,useState, ChangeEvent} from 'react';
import './App.css';
import {ITask} from './interfaces'
import TodoTask from './Components/ToDoTask';


const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);


  //callback to add new tasks to the todo list when the 'add task' button is clicked
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task") {
      setTask(event.target.value)
    } 
  }

  const addTask = (): void => {
    //Not really unique, but for the sake of this exercise I believe this is good enough! 
    const uniqueid = Math.floor(Math.random() * 10000);
    const newTask = {id: uniqueid,  taskName: task, completed: false}
    setTodo([...todo, newTask])
    setTask("");
  }

  //callback for deleting a task according to it's 'unique' ID when the X is clicked
  const deleteTask = (taskIdToDelete: number) => {
    setTodo(todo.filter((task) => {
      return task.id !== taskIdToDelete
    }))
  }

  //callback function for crossing out a task when the task is clicked
  const completeTask = (taskIdToComplete: number) => {
    setTodo(todo.map((task) => {
      if (task.id === taskIdToComplete) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return <div className="App">

    <h1>Zenfeat Todo Application</h1>

    <div className="header">
      <div className="inputContainer">
      <input type="text" placeholder="Add Tasks here" name="task" value={task} onChange = {handleChange}></input>
      </div>
      <button onClick={addTask}>Add Task</button>

    </div>
    <div className="todo">
      {todo.map((task:ITask, key:number) => {
        return <TodoTask key={key} task={task} completeTask = {completeTask} deleteTask={deleteTask}/>
      })}
    </div>
  </div>;
}

export default App;
