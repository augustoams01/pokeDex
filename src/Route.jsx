import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokeInfo from "./pages/pokeinfo";
import Home from "./pages/home";

function RoutesMap() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/pokeinfo" element={<PokeInfo/>} />
      </Routes>
    </Router>
  )
}

export default RoutesMap