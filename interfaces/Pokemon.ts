export interface Pokemon {
  id: number;
  name: string;
  url: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
}
export interface IDataPokemon {
  results: Pokemon[];
}
