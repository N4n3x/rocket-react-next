import React from 'react'
import {useRef, useEffect} from 'react'
import RocketGen from '../components/rocketGen'
import RocketGallery from '../components/rocketGallery'
import Header from '../components/Header'
import {AppBar, Toolbar, Grid, Typography, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
  return (
    <div className="container">
      <Header></Header>
      <div style={{flexGrow: "1"},{marginTop: "1rem"}}>
        <Grid container spacing={1} justify="center" alignItems="flex-start">
          <Grid item md={8} sm={12}>
            <RocketGallery rockets={props.rockets}></RocketGallery>
          </Grid>
          <Grid item md={4} sm={12}>
            <RocketGen></RocketGen>
          </Grid>
        </Grid>
      </div>
    </div>
  )
};

export const getServerSideProps = async () => {
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
};

export default Home;