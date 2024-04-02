import React from 'react'

const ShowPokemon = ({pokemon}) => {
  return (
    <div className='bg-slate-500 w-1/3 sm:w-full sm:mb-5 lg:fixed lg:inset-y-20 lg:right-1 lg:w-1/4 shadow-xl lg:me-4 lg: rounded p-4 flex flex-col items-center'>
      {pokemon?
      (<>
      <h3 className='w-full text-end text-6xl sm:text-4xl  text-white'>#{pokemon.id}</h3>
      <img src={pokemon.sprites.front_default} alt=""  className='w-4/5 sm:w-2/5'/>
      <p className='w-100 text-5xl text-white'>{pokemon.name}</p>
      </>
      )
      :null
    }
    </div>
  )
}

export default ShowPokemon