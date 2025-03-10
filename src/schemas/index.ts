import { z } from "zod";

export const rickAndMortySchema = z.object({
  id: z.number(),
  image: z.string(),
  location: z.object({
    name: z.string(),
  }),
  name: z.string(),
  species: z.string(),
  status: z.string(),
})
export const rickAndMortySchemaArray = z.array(rickAndMortySchema)