import { AddToDo } from "./components/add_todo..jsx"
import { TodoList } from "./components/todo_list.jsx"
import {useState} from "react";


export default function App(){
  const [todos, setTodos] = useState([]);  
  return <div className="w-full h-screen flex flex-col bg-gray-900 ">
    <div className="w-full h-[10%] items-center justify-center flex"> 
      <h1 className="text-3xl text-white font-bold">To Do List</h1>
    </div>
    <div className="w-full h-[90%] flex flex-col items-center gap-10 justify-center">
      <AddToDo setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  </div>
}