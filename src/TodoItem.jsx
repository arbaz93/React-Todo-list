export function TodoItem({ id, title, completed, deleteTodo, toggleTodo}) {
    return (
        <li key={id}>
        <label>
          <input className='todo' type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
          <p>{title}</p>
        </label>
        <button className='btn delete-item-btn' onClick={() => deleteTodo(id)}>Delete</button>
      </li>
    )
}