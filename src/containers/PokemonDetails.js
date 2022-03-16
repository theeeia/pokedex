import React, {Component} from 'react';
import axios from "axios"
import {POKEMON_API_URL} from "../config"
import { useParams } from 'react-router-dom';
import {CircularProgress, Box, withStyles, Typography, Grid, Button} from "@material-ui/core";
import { connect } from 'react-redux';
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = (theme)=>({
    pokedexContainer:{
        height: "84vh",
        backgroundColor: "black",
        color: "white",
        marginTop: 75,
        textAlign: "center",
        borderRadius: 5,
        paddingTop: 30
    },
    textTitle:{
        textTransform: "upperCase",
        fontFamily: "Fantasy"
    },
    pokemonImage:{
        height: "170px",
        width: "170px"
    },
    pokemonInfoContainer: {
        bottom: 60,
        position: "absolute",
        width: "100%"
    },
    separator:{
        height: "0.01mm",
        width: "95%"
    },
    favorite:{
        height: 50,
        marginTop: "15px",
        width: 50
    },
    text:{
        fontSize: 30

    }

})
export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}
const PokemonDetails = withRouter(
    class PokemonDetails extends Component {
    constructor(props) {
        super(props);
        this.state= {
            pokemon: null
        }
    }
    componentDidMount(){
        //const id = this.props.match.params.id;
        const {match } =this.props
        const {id} = match?.params
        axios.get(POKEMON_API_URL +"/"+ this.props.match.params.id).then((response)=>{
            if(response.status >= 200 && response.status<300){
                this.setState({pokemon: response.data})
            }
        })
    }
    render() {
        const {classes} = this.props
        const {pokemon} = this.state
        if(pokemon){
            const {name,sprites,height,weight,types} = pokemon
                return(
                    <Box >
                        <Box className={ classes.pokedexContainer}>
                               <Typography variant="h1" className={classes.textTitle}>
                                   {name}
                               </Typography>

                            <img className={classes.pokemonImage} src={sprites.front_default} />
                            <Box className={classes.pokemonInfoContainer}>
                                <hr className={classes.separator}/>
                                <Grid container>
                                    <Grid item md={1}>
                                        <Button className={classes.favorite}>
                                            <FavoriteIcon style={{color:"white", fontSize: 50 }}/>

                                        </Button>
                                    </Grid>
                                    <Grid item md={2}>
                                        <Typography className={ classes.text}>

                                            Name <br/> {name}
                                        </Typography>

                                    </Grid>
                                    <Grid item md={2}>
                                        <Typography className={ classes.text}>

                                            Height <br/> {height}m
                                        </Typography>

                                    </Grid>
                                    <Grid item md={2}>
                                        <Typography className={ classes.text}>

                                            Weight <br/> {weight}kg
                                        </Typography>
                                    </Grid>
                                 {types.map((pokemonType)=>{
                                     const {name} = pokemonType.type
                                     return(
                                         <Grid item md={2}>
                                             <Typography className={ classes.text}>
                                                 Type <br/> {name}
                                             </Typography>

                                         </Grid>
                                     )
                                 })}

                                </Grid>
                            </Box>
                        </Box>
                    </Box>

                )

        }else return(<CircularProgress/>)
    }
}
)
export default withStyles(styles)(PokemonDetails);