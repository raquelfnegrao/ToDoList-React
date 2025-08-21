import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className="to" style={{textDecoration: todo.isCompleted ? "line-through":""}}>
            <div className="content">
                <p>{todo.texto}</p>
                <p className="categoria">({todo.categoria})</p>
            </div>
            <div>
                <button className='complete' onClick={() => completeTodo(todo.id)}>v</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
            </div>
        </div>
    )
}

export default Todo