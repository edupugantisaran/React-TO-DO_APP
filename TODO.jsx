import React, { useState } from 'react';
import TODOFORM from '../TODOFORM';
import {RiCloseCircleLine} from "react-icons/ri";
import { TiEdit } from 'react-icons/ti';

const TODO = ({todos,completeTodo,removeTodo, updateTodo}) => {

    const [edit,setEdit] =useState({
        id:null,
        value:"",
});

const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
        id:null,
        value:"",
    });

if(edit.id){
    return<TODOFORM edit={edit} onSubmit={submitUpdate} />;

}
};
    return todos.map((TODO, -index)=>(
        <div className={TODO.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
        >
            <div key={TODO.id} onClick={()=>{completeTodo(TODO.id)}}>
                {TODO.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                onClick={()=> removeTodo(TODO.id)} 
                className="delete-icon"

                />
                <TiEdit onClick={()=> {setEdit({id:TODO.id, value: TODO.text})}} className="edit-icon"/>
            </div>
        </div>
    ));
};
export default TODO;