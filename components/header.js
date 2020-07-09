import React from "react"
import Head from 'next/head'
import {AppBar, Toolbar, Grid, Typography, Button} from '@material-ui/core'

const Header = () => {
  return (
    <>
      <Head>
        <title>Rocket Gen</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/styles/default.min.css"/>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Rocket<object type="image/svg+xml" data="./images/rocket-header.svg"></object>Gen
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
};

export default Header;