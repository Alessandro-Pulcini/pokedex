import { useState, useEffect } from "react";
import axios from "axios";
import type { Pokemon } from "./interface/interfaces";

import "./styles.css";

export default function App() {
  const [currentPokemon, setCurrentPokemon] = useState<number>(1);
  const [pokemon, setPokemon] = useState<Pokemon>({
    abilities: [],
    base_experience: 0,
    cries: { latest: "", legacy: "" },
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 1,
    is_default: false,
    location_area_encounters: "",
    moves: [],
    name: "Alakazam",
    order: 0,
    past_abilities: [],
    past_types: [],
    species: { name: "", url: "" },
    stats: [],
    types: [],
    weight: 1,
  });

  useEffect(() => {
    const response = async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`)
        .then((response) => setPokemon(response.data))
        .catch((error) => alert(error));
    };
    response();
  }, [currentPokemon]);

  return (
    <div className="App">
      <h1>
        Pokémon n. {currentPokemon}: {pokemon.name}
      </h1>
      <button onClick={() => setCurrentPokemon(currentPokemon - 1)}>
        Decrementa numero Pokémon
      </button>
      <button onClick={() => setCurrentPokemon(currentPokemon + 1)}>
        Incrementa numero Pokémon
      </button>
      <hr />
      <button onClick={() => setCurrentPokemon(1)}>
        Resetta numero Pokémon
      </button>
      <button onClick={() => setCurrentPokemon(1025)}>Ultimo Pokémon</button>
    </div>
  );
}
