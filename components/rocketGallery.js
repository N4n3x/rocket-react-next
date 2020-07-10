import React from "react"
import Link from 'next/link'
import { Button,Paper, Grid, Typography, ButtonBase } from "@material-ui/core"
// import { makeStyles } from "@material-ui/core/styles";
import styles from './rocketGallery.module.scss'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: "auto",
//     maxWidth: 500,
//   },
//   image: {
//     width: 128,
//     height: 128,
//   },
//   img: {
//     margin: "auto",
//     display: "block",
//     maxWidth: "100%",
//     maxHeight: "100%",
//   },
// }));

const RocketGallery = (props) => {
  // const classes = useStyles();

  return (
    <Paper style={{padding: "1rem"}} >
      <Typography variant="h3">Galerie</Typography>
      <Grid container spacing={1} justify="center" alignItems="flex-start" >
        {/* ----------------Start Item ---------------*/}
        {props.rockets.data.rockets.map((item, i) => {
          return (
            <Grid key={i} item>
              <Paper className={styles.paper}>
                <Grid container spacing={2}>
                  <Grid item className={styles.image} >                  
                    <object
                      className={styles.img}
                      data={`./images/${item.rkt_slug}.svg`}
                    />
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography align="center" gutterBottom variant="subtitle1">
                          {item?.rkt_name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                          {item?.rkt_desc.length > 22 ? `${item?.rkt_desc.substring(0, 22)} …` : item?.rkt_desc}
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary">
                          SVG
                        </Typography> */}
                      </Grid>
                      <Grid item className={styles.moreInfo}>
                          <Link key={i} href="/[slug]" as={`/${item?.rkt_slug}`}>
                            {/* <a> */}
                              <Button variant="contained" color="primary" href="#contained-buttons">
                                + d'informations
                              </Button>
                            {/* </a> */}
                          </Link>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1"></Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          )
        })}
        {/* ----------------End Item ---------------*/}
      </Grid>
    </Paper>
  )
};

export default RocketGallery;