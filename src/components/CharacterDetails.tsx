import { RickAndMortyCharacter } from "../types"

type CharacterDetailsProps = {
  character: RickAndMortyCharacter
}

export const CharacterDetails = ({ character }: CharacterDetailsProps) => {

  const { image, location, name, species, status } = character
  const aliveOrDeadeOrUnknownStyle = status === "Alive" ? "alive" : status === "Dead" ? "dead" : "unknown"

  return (
    <div className="character-container">
      <img src={image} alt={name} />
      <div className="character-info">
        <h3 className="character-name">{name}</h3>
        <p><span className={aliveOrDeadeOrUnknownStyle}></span>{status} - {species}</p>
        <p>Last Known Location:</p>
        <p>{location.name}</p>
      </div>
    </div>
  )
}
