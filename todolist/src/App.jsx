import { useState } from 'react'
import './App.css'
import Todo from './component/todo'
import TodoForm from './component/TodoForm'
import Busca from './component/busca'
import Filtro from './component/filtro'

function App() {

  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState('Todas')
  const [sort, setSort] = useState('A-Z')

  const [ToDo, setToDo] = useState([
    {
      id: 1,
      texto: 'Crie uma tarefa',
      categoria: 'Aqui embaixo',
      isCompleted: false
    },   
  ])
  const AddTodo = (texto, categoria) => {
    const newTodo = [...ToDo, {
      id: Math.floor(Math.random() * 100000),
      texto,
      categoria,
      isCompleted: false,
    }]
    setToDo(newTodo)
  }

  const removeTodo = (id) => {
    const newTodo = [...ToDo ]
    const filtroTodo = newTodo.filter(todo => todo.id !== id ? todo : null)
    setToDo(filtroTodo)
  }

  const completeTodo = (id) => {
    const newTodo = [...ToDo ]
    newTodo.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setToDo(newTodo)
  }

  return (
    <div className='ToDo'>
      <h1>To Do List</h1>
      <Busca busca={busca} setBusca={setBusca}/>
      <Filtro filtro={filtro} setFiltro={setFiltro} setSort={setSort}/>    
      <div className="ToDoList">
        <h2>Tarefas</h2>
        {ToDo.filter((todo) => filtro === 'Todas' ? true : filtro === 'Completas' ? todo.isCompleted : !todo.isCompleted).filter((todo) => todo.texto.toLowerCase().includes(busca.toLocaleLowerCase())).sort((a, b) => sort === 'A-Z' ? a.texto.localeCompare(b.texto) : b.texto.localeCompare(a.texto)).map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm AddTodo={AddTodo}/>
    </div>
  )
}

export default App
