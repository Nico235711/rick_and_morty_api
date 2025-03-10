import { z } from "zod";
import { rickAndMortySchema, rickAndMortySchemaArray } from "../schemas";

export type RickAndMorty = z.infer<typeof rickAndMortySchemaArray>
export type RickAndMortyCharacter = z.infer<typeof rickAndMortySchema>