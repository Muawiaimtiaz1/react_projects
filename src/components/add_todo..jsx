import { SendHorizontal } from "lucide-react";
import {useState} from "react";

export function AddToDo(props){
    const [todo, setTodo] = useState("");
    function handleSubmit(e){
        if (todo.trim() === "") {
            e.preventDefault();
            return;
        }
        e.preventDefault();
        // element={"status":"pending","text":todo,"id":crypto.randomUUID()};
        console.log(todo);
        props.setTodos(prev => [...prev, {"status":"pending","text":todo,"id":crypto.randomUUID()}]);
        setTodo("");
    }
    return <div className="rounded-4xl w-[50%]  h-[60px] bg-amber-400 border-0 outline-0 flex  items-center justify-center ">
      
      <form className="w-full h-full flex flex-wrap flex-row justify-between" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a new todo..." value={todo} onChange={(e)=>setTodo(e.target.value)} className="h-full w-[90%] bg-transparent border-0 outline-0 text-white text-lg font-medium px-4" />
        <button type="submit" className="w-[6%] h-full bg-orange-500 rounded-r-4xl flex items-center justify-center">
          <SendHorizontal className="w-5 h-5 text-white"/>
        </button>
      </form>
    </div>
}