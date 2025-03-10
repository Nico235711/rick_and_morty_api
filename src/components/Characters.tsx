import { Link } from "react-router-dom"
import { RickAndMorty } from "../types"
import { CharacterDetails } from "./CharacterDetails"

type CharactersProps = {
  characters: RickAndMorty
}

export const Characters = ({ characters }: CharactersProps) => {

  return (
    <>
      <Link
        to="/"
        className="link link-characters"
      >
        Volver a inicio
      </Link>
      {
        characters.length === 0 ? (
          <p className="no-characters">No hay personajes para mostrar. Comienza por hacer la petición a la API</p>
        ) : (
          <>
            <div className="container-characters">
              {
                characters.map(character => (
                  <CharacterDetails
                    key={character.id}
                    character={character}
                  />
                ))}
            </div>
          </>
        )
      }
    </>
  )
}
