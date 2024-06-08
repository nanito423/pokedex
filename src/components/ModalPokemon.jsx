import { IconX } from "@tabler/icons-react";
import React from "react";
import { colorByStat, colorByType } from "../constants/pokemon";
import Evolutions from "./Evolutions";

const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
  console.log(pokemon);
  return (
    <section
      className={`fixed top-0 left-0 right-0 h-screen transition-all duration-500 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      } ${colorByType[pokemon?.types[0]]}`}
    >
      <button onClick={onCloseModal} className="bg-white absolute top-4 right-4 rounded-md p-1 transition-all hover:scale-105 pixelated">
        <IconX size={34} stroke={4} />
      </button>
      <article className={`bg-white capitalize h-[85%] absolute w-full rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${showModal ? "bottom-0" : "-bottom-full"}`}>
          <header className="absolute left-1/2 -translate-x-1/2 -translate-y-[90%] scale-[180%]">
            <img src={pokemon?.image} alt="" className="pixelated" />
          </header>
          <div className="overflow-y-auto px-4 pt-12 grid gap-2 content-start h-full hidden-scroll">
          <span className="text-slate-400 text-sm font-semibold">Nº {pokemon?.id}</span>
          <h2 className="font-bold text-2xl">{pokemon?.name}</h2>
          <ul className="flex gap-2 justify-center">
        {pokemon?.types.map((type) => (
          <li className={` p-1 rounded-md px-2 text-xs font-normal text-white ${colorByType[type]} `} key={type}>{type}</li>
        ))}
          </ul>
        <div>
          <h4 className="font-bold text-sm">Pokedex Entry</h4>
          <p className="text-slate-400">{pokemon?.description}</p>
        </div>
        {/* Altura y peso */}
        <section className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <h4 className="font-bold">Height</h4>
            <span className="bg-slate-100 block rounded-full p-1">0.7m</span>
          </div>
          <div className="grid gap-2">
            <h4 className="font-bold">Weight</h4>
            <span className="bg-slate-100 block rounded-full p-1">6.9kg</span>
          </div>
        </section>
        {/* Habilidades */}
        <section className="grid gap-2">
            <h4 className="font-bold">Abilities</h4>
            <ul className="grid grid-cols-2 gap-4">
              {
                pokemon?.abilities.map((ability) => (<li key={ability} className="bg-slate-100 block rounded-full p-1">
                <span>{ability}</span>
              </li>
              ))}
              
            </ul>
        </section>
        {/* Stats */}
        <section className="grid gap-2">
          <h4 className="font-bold">Stats</h4>
          <ul className="flex justify-center gap-3 flex-wrap">
            {pokemon?.stats.map((stat) => (
              <li className={` p-1 rounded-full ${colorByStat[stat.name]}`} key={stat.name}>
                <div className="rounded-full w-[28px] aspect-square grid place-content-center">
                  <span className="text-xs text-white font-semibold">{stat.name}</span>
                </div>
                <span className="font-semibold text-sm">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="grid gap-2">
          <h4 className="font-bold">Evolutions</h4>
          <Evolutions evolutions={pokemon?.evolutions ?? []} />
        </section>
          </div>
      </article>
    </section>
  );
};

export default ModalPokemon;
