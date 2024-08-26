import { useState, useEffect } from 'react'
import './App.css'
import { TodoForm } from './todoform';
import { TodoList } from './TodoList';
function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  function addTodo(t) {
    const newTodo = {
      id: crypto.randomUUID(),
      title: t,
      completed: false
    }
    setTodos(current => [...current, newTodo]);

  }
  function toggleTodo(id, completed) {
    setTodos(currentTodo => {
      return currentTodo.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo;
      })
    })
  }
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
     
    <TodoForm onSubmit={addTodo}/>
     <h1>Todo List</h1>
     <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
