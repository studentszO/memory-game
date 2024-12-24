import { useState } from "react";
import { useEffect } from "react";
import fetchPokemonData from "../getData";
import MakeCard from "../card/card";
import "./game.css";
import randomizeDisplay from "../randomizeDisplay";
import MakeScoreBoard from "../scoreboard/scoreboard";

const pokemonList = [
  "pikachu",
  "charizard",
  "blastoise",
  "venusaur",
  "mewtwo",
  "gengar",
  "dragonite",
  "lapras",
  "arcanine",
  "alakazam",
  "machamp",
  "miltank",
];

export default function MakeGame() {
  const [data, setData] = useState([]);
  const [scores, setScores] = useState({ current: 0, best: 0 });
  const [clickedList, setClickedList] = useState([]);

  function handleClick(data, pokemonName) {
    const randomizeData = randomizeDisplay(data);
    setData(randomizeData);

    if (clickedList.includes(pokemonName)) {
      setScores({ current: 0, best: Math.max(scores.current, scores.best) });
      setClickedList([]);
    } else {
      setScores({ current: scores.current + 1, best: scores.best });
      setClickedList([...clickedList, pokemonName]);
    }
  }

  useEffect(() => {
    async function fetchAllPokemonsData(list) {
      const promises = list.map((pokemon) => fetchPokemonData(pokemon));
      const results = await Promise.all(promises);
      setData(randomizeDisplay(results));
    }
    fetchAllPokemonsData(pokemonList);
  }, []);

  return (
    <>
      <h1>
        MEMORY CARD <span>game by chryszO</span>
      </h1>
      <MakeScoreBoard scores={scores} />
      <ul className="game-container">
        {data.map((pokemon) => (
          <MakeCard
            pokemon={pokemon}
            key={pokemon.id}
            onClickFn={() => handleClick(data, pokemon.name)}
          />
        ))}
      </ul>
    </>
  );
}
