import React from 'react'
import PokemonDetail from './PokemonDetail'

const Aside = ({pokemon, isLoading}) => {
  return (
    <section className="hidden lg:block sticky top-0 h-screen overflow-hidden">
      {/* Aside con pokemon */}
      <article className={`absolute bottom-0 bg-white w-full h-[85%] z-20 rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${pokemon && !isLoading ? "left-0" : "left-[50vw]"}`}>
      <PokemonDetail pokemon={pokemon} />
      </article>
      {/* Aside sin pokemon */}
      <article className={`absolute bottom-0 bg-white w-full h-[85%] z-20 rounded-tl-3xl rounded-tr-3xl text-center grid place-content-center transition-all duration-500 ${pokemon ? "left-[50vw]" : "left-0"}`}>
      <header className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[70%] scale-90'>
        <img src="/no-pokemon-selected.png" alt="No Pokemon Selected" />
      </header>
      <span className='text-lg text-slate-400 px-20'>Select a Pokemon to display here.</span>
      </article>
      {/* Loader */}
      <div className='w-[60px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
        <img className='contrast-50 animate-spin' src="/pokeball-icon.png" alt=""Pokeball />
      </div>

      </section>
  )
}

export default Aside