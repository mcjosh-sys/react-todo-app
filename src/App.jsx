import React from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {

  return (
    <div className="todo-app">
     <h1> Whats the plan for today</h1>
        <TodoForm/>
        <Todo />
    </div>
  )
}

export default App
