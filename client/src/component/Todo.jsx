import React, { useState } from 'react'
import { toggleTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'

const Todo = (todo) => {

const dispatch = useDispatch();

const [editing, setEditing] = useState(false);

    return (
        <>
        <li
            className='task'
            onClick={()=>dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo._id ? 'line-through':'',
                color: todo._id ? '#bdc3c7': '#34495e'
            }}
            >
            <span>{todo.data}</span>
            <span className='icon'>
                <i className='fa fa-pen' />
            </span>
            <span className='icon' onClick={()=> setEditing(prevState=>!prevState)}>
                <i className='fa fa-trash' />
            </span>
            
        </li>
        <div>Part 2: 35 mins</div>
        </>
    )
}

export default Todo