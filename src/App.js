import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Pokedex from "./containers/Pokedex";
import AppNavigator from "./components/AppNavigator";
import PokemonDetails from "./containers/PokemonDetails"
import {Provider} from "react-redux"
import {store,persistor} from "./redux/store"
import {PersistGate} from "redux-persist/integration/react"
import Favourites from "./containers/Favourites"

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                <AppNavigator/>
                <Routes>
                    <Route exact path="/" element={<Pokedex/>}/>
                    <Route exact path="/pokemon/:id" element={<PokemonDetails/>}/>
                    <Route exact path="/favourites" element={<Favourites/>}/>
                </Routes>
            </Router>
            </PersistGate>

        </Provider>

    )
}