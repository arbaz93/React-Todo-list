import { useState, useEffect } from 'react'

export function TodoForm({ onSubmit }) { // TodoForm(props) passing props is a default method. the modern method is to destructor the parameters
    const [newItem, setnewItem] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        if(newItem === '') return;
        // props.onSubmit(newItem); this is props method
        onSubmit(newItem)
        setnewItem('')
      }
    return (
        <form onSubmit={handleSubmit} className='todo-form'>
      <label htmlFor="item-input" className='uppercase'>Add new item</label>
      <input type="text" id='item-input' value={newItem} onChange={e => setnewItem(e.target.value)} className='todo-form-input'/>
      <button type='submit' className='todo-form-btn uppercase'>add</button>
     </form>
    )
}