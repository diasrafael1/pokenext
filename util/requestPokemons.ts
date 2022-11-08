import { IDataPokemon } from "../interfaces/Pokemon";

export async function requestPokemons(): Promise<IDataPokemon> {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data: IDataPokemon = await res.json();

  return data;
}
