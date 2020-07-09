import React from 'react'
import {useRef, useEffect} from 'react'
import Head from 'next/head'
import RocketGen from '../components/rocketGen'
import RocketGallery from '../components/rocketGallery'
import {AppBar, Toolbar, Grid, Typography, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  let svg = useRef();
  // useEffect(() => {
  //   svg.current.getSVGDocument().getElementById("rocket").setAttribute("fill", "white");
  // }, [svg]);

  const color = () =>{
    svg.current.getSVGDocument().getElementById("rocket").setAttribute("fill", "red");
  }
  // console.log(svg.current)
  return (
    <div className="container">
      <Head>
        <title>Rocket Gen</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Rocket<object type="image/svg+xml" ref={svg} data="./images/rocket-20.svg"></object>Gen
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{flexGrow: "1"},{marginTop: "1rem"}}>
      <Grid container spacing={1} justify="center" alignItems="flex-start">
        <Grid item xs={9}>
          <RocketGallery></RocketGallery>
        </Grid>
        <Grid item xs={3}>
          <RocketGen></RocketGen>
        </Grid>
      </Grid>
      </div>
      
        
      

    </div>
  )
}
