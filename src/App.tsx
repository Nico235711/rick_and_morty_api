import { useState } from "react"

const BASE_URL = "https://rickandmortyapi.com/api/character"

const App = () => {

  const [characters, setCharacters] = useState([])

  const handleSearchCharacters = async () => {
    const response = await fetch(BASE_URL)
    const result = await response.json()
    setCharacters(result.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty API</h1>
        <img
          src="/rick-morty.png"
          alt="Rick & Morty" 
          className="img-home"
        />
      </header>
      <button
        type="button"
        className="btn-search"
        onClick={handleSearchCharacters}
      >Buscar Personajes</button>
    </div>
  )
}

export default App