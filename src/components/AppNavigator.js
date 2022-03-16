import React from "react";
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) =>({
    AppBar:{
        backgroundColor: "Black"
    },
    link:{
        textDecoration: "none"
    },
    title:{
        cursor: "pointer",
        color: "White"
    }

}))
export default function AppNavigator(){
    const classes= useStyles()
    return(
         <AppBar className={classes.AppBar} position="fixed" variant="elevation" >
             <Toolbar>
                 <Link to="/" className={classes.link}>
                      <Typography className={classes.title} variant={"h6"}>
                          Pokedex
                      </Typography>
                 </Link>
                 <Link to="/favourites" className={classes.link}>
                     <Typography className={classes.title} variant={"h6"} style={{marginLeft: 15}}>
                         Favourites
                     </Typography>
                 </Link>
             </Toolbar>
         </AppBar>

    )
}