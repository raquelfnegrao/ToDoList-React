const Filtro = ({filtro, setFiltro, setSort}) => {
  return (
    <div className="filtro">
        
        <div className="filtro-opcao">
            <div className="filtrando">
                <h2>Filtre:</h2>
                <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                    <option value="Todas">Todas</option>
                    <option value="Completas">Completas</option>
                    <option value="Incompletas">Incompletas</option>
                </select>
            </div>
            <div className="ordenar">
                <h2>Ordenar:</h2>
                <button onClick={() => setSort('A-Z')}>A-Z</button>
                <button onClick={() => setSort('Z-A')}>Z-A</button>
            </div>
        </div>
    </div>
  )
}

export default Filtro