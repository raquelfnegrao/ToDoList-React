import {React} from 'react'

const Todo = ({ todo, dispatch }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
        <div className="content">
            <p>{todo.texto}</p>
            <p className='categoria'>({todo.categoria})</p>
        </div>
        <div>
            <button 
              className='complete' 
              onClick={() => dispatch({ type: 'CONCLUIR_TAREFA', payload: { id: todo.id } })}
            >
              v
            </button>
            <button 
              className='remove' 
              onClick={() => dispatch({ type: 'REMOVER_TAREFA', payload: { id: todo.id } })}
            >
              x
            </button>
        </div>
    </div>
  )
}

export default Todo
