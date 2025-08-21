import { useState, useRef, useEffect } from "react"

const TodoForm = ({ dispatch }) => {
    const [texto, setTexto] = useState('')
    const [categoria, setCategoria] = useState('')
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!texto || !categoria) return
        dispatch({
            type: 'ADICIONAR_TAREFA',
            payload: { texto, categoria }
        })
        setTexto('')
        setCategoria('')

        inputRef.current.focus();
    }

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Digite o título' value={texto} onChange={(e) => setTexto(e.target.value)} ref={inputRef}/>
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Adicionar</button>
        </form>
    </div>
  )
}

export default TodoForm
