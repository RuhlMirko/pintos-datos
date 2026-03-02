import React from "react"

function App() {
  const [currFilter, setCurrFilter] = React.useState(null)

  function updateFilter(chosenFilter){
    setCurrFilter(chosenFilter)
  }

  return (
    <main className='search-card'>
      <h1>CONSULTA RÁPIDA</h1>
      <div className="result"></div>      
      <form>
        <label className='search-input-wrapper'>
          <span className='search-icon' aria-hidden='true'>⌕</span>
          <label htmlFor="search">PLU / Nombre</label>
          <input id="search" type='text' placeholder='Busca por PLU o nombre...' />
        </label>
        <h2>Filtros</h2>
        <div className='filters'>
          <button
            className={currFilter === 'Fruta' ? 'selected' : ''}
            type='button'
            onClick={() => updateFilter('Fruta')}
          >
            <span className='filter-icon' aria-hidden='true'>🍎</span>
            FRUTAS
          </button>
          <button
            className={currFilter === 'Verdura' ? 'selected' : ''}
            type='button'
            onClick={() => updateFilter('Verdura')}
          >
            <span className='filter-icon' aria-hidden='true'>🍃</span>
            VERDURAS
          </button>
          
        </div>
        <button className='search-btn' type='submit'>CONSULTAR</button>
      </form>
    </main>
  )
}

export default App
