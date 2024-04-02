import React from "react";

const PokemonCard = ({pokemon,selectedPokemon}) => {
  return (
    <li className="sm:w-3/12 shadow w-2/12 m-3 p-2 flex flex-col items-center hover:bg-indigo-500 hover:scale-110 rounded" onClick={()=>{selectedPokemon(pokemon)}}> 
      <h3>{pokemon.id}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </li>
  );
};

export default PokemonCard;
