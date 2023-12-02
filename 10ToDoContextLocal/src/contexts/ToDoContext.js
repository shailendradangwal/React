import { Context, createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "Message",
            completed : false,
        }
    ],
    addToDo : (todo) => {},
    updateToDo : (id, todo) => {},
    deleteToDo : (id) => {},
    toggleComplete : (id) => {}
})  


export const useToDo = () => {
    return useContext(ToDoContext);
}

export const TodoProvider = ToDoContext.Provider