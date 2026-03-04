import React from "react"
import {
  Apple, Leaf, ArrowLeft, Loader2, Database,
  Salad, Search, ShieldCheck, Sparkles,
  Maximize, Camera, CheckCircle2, Info
} from 'lucide-react';

function App() {
  const [currFilter, setCurrFilter] = React.useState(null)

  const resultDiv = document.querySelector('.result')
  const testResult = {Fruta:{"Banana ecuador": { codigo: 8844, tipo: "Producto fresco" }}}

  function handleSubmit(e){
    e.preventDefault()
    renderResult()
    console.log('handleSubmit called')
  }

  function renderResult(){    
    resultDiv.innerHTML = `<h2>${testResult.Fruta["Banana ecuador"]["codigo"]}</h2>`
    console.log('renderResult called')
  }

  function updateFilter(chosenFilter){    
    setCurrFilter(chosenFilter)   
  }

  return (
    <main className='search-card'>
      <img src='/carrefour-logo.svg' alt="" className="logo-carrefour"/>
      <h1>CONSULTA RÁPIDA</h1>
      <div className="result"></div>      
      <form onSubmit={handleSubmit}>
        <label className='search-input-wrapper'>
          <span className='search-icon' aria-hidden='true'>⌕</span>          
          <input id="search" type='text' placeholder='Busca por PLU o nombre...' />
        </label>
        <h2>Filtros</h2>
        <div className='filters'>
          <button
            className={currFilter === 'Fruta' ? 'selected' : ''}
            type='button'
            onClick={() => updateFilter('Fruta')}
          >
            <span className='filter-icon fruit' aria-hidden='true'><Apple/></span>
            FRUTAS
          </button>
          <button
            className={currFilter === 'Verdura' ? 'selected' : ''}
            type='button'
            onClick={() => updateFilter('Verdura')}
          >
            <span className='filter-icon vegetable' aria-hidden='true'><Leaf/></span>
            VERDURAS
          </button>
          
        </div>
        <button className='search-btn' type='submit'>CONSULTAR</button>
      </form>
    </main>
  )
}

export default App
