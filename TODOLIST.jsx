import React, { useState } from 'react'
import TODOFORM from './TODOFORM';
import TODO from './TODO';


const TODOLIST = () => {

    const[todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^/s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^/s*$/.test(newValue.text)){
            return;
    }

    setTodos ((prev) =>
        prev.map((item=>(item.id === todoId ? newValue : item)))
);
    };

    const removeTodo = id =>{
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    };

    const completeTodo = id=>{
        let updateTodos = todos.map(todo =>{
            if(todo.id === id ){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
setTodos(updateTodos);
    };
   
    return (
        <>
        <h1>Today's Plan?</h1>
        <TODOFORM onSubmit={addTodo} />
        <TODO 
        todos={todos} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo} 
        updateTodo={updateTodo}/>
        </>
    );
};
export default TODOLIST;