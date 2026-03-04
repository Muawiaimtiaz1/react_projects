import { useState } from "react"
import {LucideDelete} from "lucide-react"
export function TodoList(props){
    
    if(props.todos.length === 0) return <div className="w-full h-[50%] flex items-center justify-center">
        <h2 className="text-2xl text-white font-medium">No todos yet...</h2>
    </div>
    return <div className="w-[45%] h-[50%] overflow-y-auto overflow-x-hidden
 flex flex-col items-center  justify-start gap-4 border border-1 border-gray-500 rounded-2xl p-5">
        {props.todos.map((todo, index) => <div key={index} className="w-full h-[80px] bg-slate-500 rounded-2xl flex  text-white  text-3xl font-medium px-3 items-center justify-between px-3 py-5 border-slate-400 border-2" >
           
           <p>
            {todo.text}
            </p>
            <div className="flex flex-row h-full ">

            {todo.status === "pending" ? <span className="ml-2 text-sm text-gray-300" onClick={()=>{
                props.setTodos(items=>items.map(item=>item.id ===todo.id ? {...item,"status":"completed"}:item))
            }} >Pending</span> : <span className="ml-2 text-sm text-white bg-green-900 rounded-4xl border-0 outline-0 px-1 py-1 text-sm border-green-800 border-2">Completed</span>}

            <button value={todo.id} className="ml-2 text-white  rounded-full w-6 h-6 flex items-center justify-center"onClick={()=>{
                props.setTodos(prev => prev.filter(t => t.id !== todo.id));
            }}><LucideDelete className="w-7 h-7"/></button>
            </div>
            </div>)}
    </div>
}