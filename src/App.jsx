function App() {
  return (
    <main className='search-card'>
      <h1>CONSULTA RÁPIDA</h1>
      <div className="result"></div>      
      <form>
        <label className='search-input-wrapper'>
          <span className='search-icon' aria-hidden='true'>⌕</span>
          <input type='text' placeholder='Busca por PLU o nombre...' />
        </label>
        <button className='search-btn' type='submit'>CONSULTAR</button>
        <div className='filters'>
          <button type='button'>
            <span className='filter-icon' aria-hidden='true'>🍎</span>
            FRUTAS
          </button>
          <button type='button'>
            <span className='filter-icon' aria-hidden='true'>🍃</span>
            VERDURAS
          </button>
        </div>
      </form>
    </main>
  )
}

export default App
