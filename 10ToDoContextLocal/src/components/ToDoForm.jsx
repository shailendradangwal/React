import React, {useState} from 'react'
import { useToDo } from '../contexts/ToDoContext';

function TodoForm() {
    const[todo, setToDo] = useState("")

    const {addToDo} = useToDo()

    const add = (e) => {
        console.log("ADDED");
        e.preventDefault()

        if (!todo) return 

        addToDo({ todo, completed : false })
        setToDo("")
    }

    return (
        <form onSubmit={ add } className="flex">
            <input
                type="text" value={todo} onChange={(e) => setToDo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

