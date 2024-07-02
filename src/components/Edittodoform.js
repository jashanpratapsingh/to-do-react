import React, {useState} from 'react'

export const Edittodoform = ({editTodo, task}) => {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);

        setValue("")
    }
  return (
    <form className='Todoform' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder="What is the task today?" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}