const Busca = ({busca, setBusca}) => {
  return (
    <div className="busca">
        <h2>Pesquise:</h2>
        <input type="text" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Buscar"/>
    </div>
  )
}

export default Busca