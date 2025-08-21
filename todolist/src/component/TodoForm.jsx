import {useState} from 'react'

const todoForm = ({AddTodo}) => {
  const [value, setValue] = useState("")
  const [categoria, setCategoria] = useState("")

  const apoioSubmit = (e) => {
    e.preventDefault();
    if (!value || !categoria) return
    AddTodo(value, categoria)
    setCategoria('')
    setValue('')
  }
  return (
    <div className='todo-form'>
      <h2>Crie uma tarefa</h2>
      <form onSubmit={apoioSubmit}>
        <input type="text" placeholder='Digite a tarefa' value={value} onChange={(e) => setValue(e.target.value)}/>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Selecione</option>
          <option value="trabalho">Trabalho</option>
          <option value="pessoal">Pessoal</option>
          <option value="estudos">Estudos</option>
        </select>
        <button type="submit">Criar</button>
      </form>
    </div>
  )
}

export default todoForm