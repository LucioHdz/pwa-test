import React from 'react'
import PokemonCard from './PokemonCard'

const Pokedex = ({listaPokemons,actualizarDatos,setSelectedPokemon}) => {
  return (
    <section className='flex flex-wrap w-full lg:overflow-y-scroll  h-screen  ' >
      <ul className='flex flex-wrap justify-center '>

      {listaPokemons.map(pokemon=>{
        return(
          <PokemonCard pokemon = {pokemon} selectedPokemon = {setSelectedPokemon}/>
          )
        })}
        </ul>
    </section>
  )
}

export default Pokedex