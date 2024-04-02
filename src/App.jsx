import React, { useEffect, useState } from "react";
import ShowPokemon from "./components/ShowPokemon";
import Pokedex from "./components/Pokedex";

const App = () => {
  const [listaPokemons, setListaPokemons] = useState([]);

  const [URL, setURL] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );

  const [selectedPokemon, setSelectedPokemon] = useState();


  const cargarDatos = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((datos) => {
        setURL(datos.next);
        const promesas = datos.results.map((pokemon) => {
          return fetch(pokemon.url).then(res=>res.json());
        });
        Promise.all(promesas).then(datosPokemon=>{
          setListaPokemons([...listaPokemons,...datosPokemon]);
        })
      });
  };

  const actualizarDatos = () => {
    cargarDatos(URL);
  };

  useEffect(() => {
    cargarDatos(URL);
  }, []);

  return (
    <>
      <h1 className="w-screen text-center text-white bg-red-500 sm:hidden md:hidden lg:flex text-3xl font-bold justify-center shadow p-4">
        PokeApi
      </h1>
      <section className="flex sm:flex-col-reverse lg:flex-row justify-center items-center mt-4 w-full box-border  lg:w-3/4">
        <Pokedex
          listaPokemons={listaPokemons}
          actualizarDatos={actualizarDatos}
          setSelectedPokemon = {setSelectedPokemon}
        />
        <ShowPokemon pokemon = {selectedPokemon} />
      </section>
    </>
  );
};

export default App;
