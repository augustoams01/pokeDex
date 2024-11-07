import React, { useEffect } from 'react'
import NavBar from "../components/NavBar"
import PokemonCard from '../components/PokemonCard'
import { Box, Container, Grid } from '@mui/material'
import { useState } from 'react';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

function Home({setPokemonData}) {

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons(); 
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for(var i = 1; i < 50; i++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => (axios.get(endpoint)))).then((res) => setPokemons(res))

  };
  
  const pokemonSearch = (name) => {
    if(name === ''){
      return getPokemons();
    }
    var searchedPokemons = [];
    for(var i in pokemons) {
      if (pokemons[i].data.name.includes(name)){
        searchedPokemons.push(pokemons[i]);
      }
    }
    setPokemons(searchedPokemons);
  };

  const navigate = useNavigate();

  const pokemonClickHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigate(`/pokeinfo/${pokemonData.name}`);
  };

  return (
    <div>
        <NavBar pokemonSearch={pokemonSearch}/>
        <Container maxWidth="xl">
          <h1 className='text-[#C73659] tracking-wider text-4xl text-center font-black uppercase py-4'>Stuning PokeDex</h1>
            <Grid container spacing={2}>
                {pokemons.map((pokemon, key) => (
                    <Grid item xs={3} key={key}>
                      <Box onClick={() => pokemonClickHandler(pokemon.data)}>
                        <PokemonCard tag={pokemon.data.id} name={pokemon.data.name} image={pokemon.data.sprites.front_default} type={pokemon.data.types[0].type.name}/>
                      </Box>

                    </Grid>
                ))}
            </Grid>

        </Container>
    </div>
  )

}

export default Home