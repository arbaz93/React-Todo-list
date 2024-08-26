import { useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  console.log(todos)

    return (
        <ul className='todo-list'>
        {todos.length === 0 && 'No Todos'}
      {todos.map(item => {
        return (
            <TodoItem {...item} key={item.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        )
      })}
     
     </ul>
    )
}