import React, {createContext, useContext, useState, useEffect} from 'react'

const Context = createContext()

export const StateContext = ({children}) => { 
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(
    localStorage.hasOwnProperty('my-todos') ? 
    JSON.parse(localStorage.getItem('my-todos')) : []  
  )
  const [edit, setEdit] = useState({
    id: null,
    value:''
})

  useEffect(()=>{
    localStorage.setItem('my-todos',JSON.stringify(todos))
  },[todos])

  useEffect(()=>{
    edit.id ? setInput(edit.value) : setInput(input)
  },[edit.id])
  
  const addTodo = todo => {
    if((!todo.text || /^\s*$/.test(todo.text))){
        return;
    }
    const newTodos = [...todos, todo]
    setTodos(newTodos)
    
  }

  const updateTodo = (todoId, newVal) => {
    if((!newVal.text || /^\s*$/.test(newVal.text))){
        return;
    }
    setTodos(prev => prev.map(item => item.id === todoId? newVal : item))
  }

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({id: null, value: ''})
  }

  const removeTodo = id => {
    const removeArr = todos.filter(todo => todo.id !== id)
    setTodos(removeArr)
  }
  
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if(todo.id === id){
        console.log(todo.isComplete)
        todo.isComplete = !todo.isComplete
      }
    })
    setTodos(updatedTodos)
  }

  return (
    <Context.Provider value={{
      input,
      setInput,
      addTodo,
      todos,
      setTodos,
      edit,
      setEdit,
      updateTodo,
      submitUpdate,
      removeTodo,
      completeTodo
      }}>
        {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)