import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Pokedex from "./containers/Pokedex";
import AppNavigator from "./components/AppNavigator";
import PokemonDetails from "./containers/PokemonDetails"

export default function App() {

    return (
            <Router>
                <AppNavigator/>
                    <Routes>
                        <Route exact path="/" element={<Pokedex/>}/>
                        <Route exact path="/pokemon/:id" element={<PokemonDetails/>}/>

                    </Routes>
            </Router>
    )
}