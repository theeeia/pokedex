import React from "react"
import {Grid, Card, CardMedia, CardContent, Typography, makeStyles} from "@material-ui/core";
import {Link} from  "react-router-dom"
const useStyles = makeStyles((theme)=>({
    card:{
        cursor: "pointer",
        backgroundColor: "black",
        color: "white",
        "&:hover": {
            backgroundColor: "rgb(90,90,90)"
        }
    },
    cardMedia:{
        margin: "auto",
        height: "130px",
        width: "130px"
    },
    cardContent:{
        textAlign:"center"
    },
    link:{
        textDecoration: "none"
    }

}))
export default function PokemonCard(props){
    const {pokemon, image}= props
    const classes= useStyles()

    return (
        <Grid item xs={12} sm={2} >
            <Link to={"/pokemon/" + pokemon.id} className={classes.link}>


            <Card className={classes.card}>
                <CardMedia image={image} className={classes.cardMedia}></CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography>
                        {pokemon.name}
                    </Typography>
                </CardContent>
            </Card>
            </Link>
        </Grid>
    )
}