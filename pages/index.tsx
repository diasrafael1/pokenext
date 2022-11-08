import Image from "next/image";
import { IDataPokemon, Pokemon } from "../interfaces/Pokemon";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import { requestPokemons } from "../util/requestPokemons";

export async function getStaticProps() {
  const data: IDataPokemon = await requestPokemons();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poké<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokéNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
