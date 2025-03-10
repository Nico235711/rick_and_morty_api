import { Link } from "react-router-dom"

type HeaderProps = {
  handleSearchCharacters: () => Promise<void>
}

export const Header = ({ handleSearchCharacters }: HeaderProps) => {

  return (
    <header className="App">
      <h1 className="title">Rick & Morty API</h1>
      <img
        src="/rick-morty.png"
        alt="Rick & Morty"
        className="img-home"
      />
      <div className="container-buttons">
        <button
          type="button"
          className="btn-search"
          onClick={handleSearchCharacters}
        >Buscar Personajes</button>
        <Link
          to="/characters"
          className="link"
        >Ver Personajes</Link>
      </div>
    </header >
  )
}
