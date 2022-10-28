import React, {useRef, useEffect} from 'react'
import uid from './utils/uid'
import {useStateContext} from '../context/StateContext'


function TodoForm(props) {
    const inputRef = useRef()
    const {addTodo,submitUpdate,edit,input, setInput} = useStateContext()

    useEffect(()=>{
      inputRef.current.focus()
    })

    const handleSubmit = e => {
      e.preventDefault();
      if(edit.id){
        submitUpdate({
          id: edit.id,
          text: input,
          isComplete: false
        })
      }else{
        addTodo({
          id: uid(),
          text: input,
          isComplete: false
        })
    }

      setInput('')
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {
          edit.id ? (
            <>
              <h4>Update Todo</h4>
              <input type='text' placeholder={edit.value}
              name='text' className='todo-input edit' value={input} 
              onChange={(e) => setInput(e.target.value)}
              ref={inputRef} />
              <button className='todo-button edit' >Update</button>
            </>
          ) : (
            <>
                  <input type='text' placeholder='Add a todo'
              name='text' className='todo-input' value={input} 
              onChange={(e) => setInput(e.target.value)}
              ref={inputRef} />
              <button className='todo-button' >Add todo</button>
            </>
          )
        }
    </form>
  )
}

export default TodoForm