import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import { useStateContext } from '../context/StateContext'

const Todo = () => {
  const {todos, removeTodo, edit, setEdit} = useStateContext()
  
  if(edit.id){
    
  }else{
    return todos.map((todo) => (
      <div className='todo-row' key={todo.id}>
      <div>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={()=>removeTodo(todo.id)} className='delete-icon' />
        <TiEdit onClick={() => setEdit({id: todo.id, value:todo.text})} className='edit-icon' />
      </div>
    </div>
  ))
  }
    
}

export default Todo