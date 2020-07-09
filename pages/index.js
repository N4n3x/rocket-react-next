import React from 'react'
import {useRef, useEffect} from 'react'
import Head from 'next/head'
import RocketGen from '../components/rocketGen'
import RocketGallery from '../components/rocketGallery'
import {AppBar, Toolbar, Grid, Typography, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Home(props) {
 
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
            Rocket<object type="image/svg+xml" data="./images/rocket-20.svg"></object>Gen
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{flexGrow: "1"},{marginTop: "1rem"}}>
      <Grid container spacing={1} justify="center" alignItems="flex-start">
        <Grid item xs={9}>
          <RocketGallery rockets={props.rockets}></RocketGallery>
        </Grid>
        <Grid item xs={3}>
          <RocketGen></RocketGen>
        </Grid>
      </Grid>
      </div>
      
        
      

    </div>
  )
}

export const getStaticProps = async (context) => {
  const query = `
    query {
      rockets {
        rkt_name
        rkt_desc
        rkt_slug
      }
    }
  `;
  const url = 'http://localhost:1337/graphql';
  const opts = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Autorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk0MTQ4NDM5LCJleHAiOjE1OTY3NDA0Mzl9.eBsLAox_TkkftqbrKIDCDCCaOu4vjQ_6094eD2JirAM'
    },
    body: JSON.stringify({ query })
  };
  let response = await fetch(url, opts);
  let rockets = await response.json();
  return {
    props: {
      rockets
    }
  }
}