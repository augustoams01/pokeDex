import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokeInfo from "./pages/pokeinfo";
import Home from "./pages/home";
import { useState } from 'react';

function RoutesMap() {
  const [pokemonData, setPokemonData] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setPokemonData={setPokemonData}/>} />
        <Route path={`/pokeinfo/${pokemonData.name}`} element={<PokeInfo pokemonData={pokemonData}/>} />
      </Routes>
    </Router>
  )
}

export default RoutesMap