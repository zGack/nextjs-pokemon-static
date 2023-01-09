import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async ( nameOrId: string) => {

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  // obtener informacion de la data que solo es relevante para la app
  return  {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }
}
