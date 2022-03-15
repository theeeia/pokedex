import React, {Component} from 'react';
import axios from "axios"
import {POKEMON_API_URL} from "../config"
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}
class PokemonDetails extends Component {
    constructor(props) {
        super(props);
        this.state= {
            pokemon: null
        }

    }

    componentDidMount(){
        //const id = this.props.match.params.id;
        const {match} =this.props
        const {id} = match?.params
        axios.get(POKEMON_API_URL +"/"+ this.props.match.params.id).then((response)=>{
            if(response.status >= 200 && response.status<300){
                this.setState({pokemon: response.data})
            }
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1 style={{marginTop: "200px"}}>fafa</h1>
            </div>
        );
    }
}

export default withRouter(PokemonDetails);