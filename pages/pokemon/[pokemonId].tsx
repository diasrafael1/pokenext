import { GetStaticPropsContext } from "next";
import { IDataPokemon, Pokemon } from "../../interfaces/Pokemon";
import { requestPokemons } from "../../util/requestPokemons";

export const getStaticPaths = async () => {
  const data: IDataPokemon = await requestPokemons();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function PokemonId({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  );
}
