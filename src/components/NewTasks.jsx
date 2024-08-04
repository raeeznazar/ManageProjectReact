import React, { useState } from 'react'

function NewTasks({ onDeleteTasks, onAddTasks }) {
    const [enteredTask, setEnteredTasks] = useState('')
    function handleChange(event) {
        setEnteredTasks(event.target.value)
    }
    function handleClick() {
        if (enteredTask.trim() === '') {
            return;
        }
        onAddTasks(enteredTask)
        setEnteredTasks('')
    }
    return (
        <div className='flex item-center gap-4'>
            <input type='text' className='w-64 py-1 px-2 rounded-sm bg-sstone-200' onChange={handleChange} value={enteredTask} />
            <button className='text-stone-700 hover:text-stone-950' onClick={handleClick}>Add Tasks</button>
        </div>
    )
}
export default NewTasks