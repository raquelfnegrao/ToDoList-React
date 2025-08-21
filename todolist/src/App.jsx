import { useState, useReducer } from 'react';
import './App.css';
import Todo from './component/todo';
import TodoForm from './component/TodoForm';
import Busca from './component/busca';
import Filtro from './component/filtro';

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'ADICIONAR_TAREFA': {
      return [
        ...tasks,
        {
          id: Math.floor(Math.random() * 100000),
          texto: action.payload.texto,
          categoria: action.payload.categoria,
          isCompleted: false,
        },
      ];
    }
    case 'REMOVER_TAREFA': {
      return tasks.filter(todo => todo.id !== action.payload.id);
    }
    case 'CONCLUIR_TAREFA': {
      return tasks.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });
    }
    default:
      return tasks;
  }
}

const estadoInicialDasTarefas = [
  {
    id: 1,
    texto: 'Crie uma tarefa',
    categoria: 'Aqui embaixo',
    isCompleted: false
  },
];

function App() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('Todas');
  const [sort, setSort] = useState('A-Z');
  const [tasks, dispatch] = useReducer(tasksReducer, estadoInicialDasTarefas);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`ToDo ${theme}`}> 
      <h1>To Do List</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={toggleTheme}>
          Mudar para Tema {theme === 'light' ? 'Escuro' : 'Claro'}
        </button>
      </div>
      <Busca busca={busca} setBusca={setBusca} />
      <Filtro filtro={filtro} setFiltro={setFiltro} setSort={setSort} />
      <div className="ToDoList">
        <h2>Tarefas</h2>
        {tasks
          .filter((todo) => filtro === 'Todas' ? true : filtro === 'Completas' ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) => todo.texto.toLowerCase().includes(busca.toLocaleLowerCase()))
          .sort((a, b) => sort === 'A-Z' ? a.texto.localeCompare(b.texto) : b.texto.localeCompare(a.texto))
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              dispatch={dispatch}
            />
          ))}
      </div>
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
