import { useState } from "react"
import { rickAndMortySchemaArray } from "./schemas"
import { RickAndMorty } from "./types"
import { Characters } from "./components/Characters"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"

const BASE_URL = "https://rickandmortyapi.com/api/character"

const App = () => {

  const [characters, setCharacters] = useState<RickAndMorty>([])

  const handleSearchCharacters = async () => {
    const response = await fetch(BASE_URL)
    const { results } = await response.json()
    const result = rickAndMortySchemaArray.safeParse(results)
    if (result.success) setCharacters(result.data)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Header handleSearchCharacters={handleSearchCharacters} />}
        />
        <Route
          path="/characters"
          element={<Characters characters={characters} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App