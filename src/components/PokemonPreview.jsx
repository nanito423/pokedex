import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const PokemonPreview = ({ pokemonURL, onClick }) => {
const [pokemon, setPokemon] = useState(null);

const colorByType = {
  normal: "bg-[#BCBCAC]",
  fighting: "bg-[#BC5442]",
  flying: "bg-[#669AFF]",
  poison: "bg-[#AB549A]",
  ground: "bg-[#DEBC54]",
  rock: "bg-[#BCAC66]",
  bug: "bg-[#ABBC1C]",
  ghost: "bg-[#6666BC]",
  steel: "bg-[#ABACBC]",
  fire: "bg-[#FF421C]",
  water: "bg-[#2F9AFF]",
  grass: "bg-[#78CD54]",
  electric: "bg-[#FFCD30]",
  psychic: "bg-[#FF549A]",
  ice: "bg-[#78DEFF]",
  dragon: "bg-[#7866EF]",
  dark: "bg-[#785442]",
  fairy: "bg-[#FFACFF]",
  unknown: "",
  shadow: "",
};

  useEffect(() => {
    axios
      .get(pokemonURL)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return <article onClick={() => onClick(pokemon)} className="text-center bg-white rounded-3xl relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/10 border-2 border-transparent hover:border-slate-200 cursor-pointer group grid gap-2">
    <header className="h-10">
        <img className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-110 transition-transform pixelated" src={pokemon?.sprites.versions["generation-v"]["black-white"]["animated"].front_default} alt="" />
    </header>
    <span className="text-xs text-slate-400 font-normal">Nº {pokemon?.id}</span>
    <h4 className="text-lg">{pokemon?.name}</h4>
    <ul className="flex gap-2 justify-center">
      {pokemon?.types.map((type) => (
        <li className={` p-1 rounded-md px-2 text-xs font-normal text-white ${colorByType[type.type.name]} `} key={type.type.name}>{type.type.name}</li>
      ))}
    </ul>
  </article>
};

export default PokemonPreview;
