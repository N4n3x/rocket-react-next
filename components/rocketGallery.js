import React from "react";
import { Paper, Grid, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function RocketGallery() {
  const classes = useStyles();

  return (
    <Paper style={{padding: "1rem"}}>
      <Typography variant="h3">Galerie</Typography>
      <Grid container spacing={1} justify="flex-start" alignItems="flex-start" >
        {/* ----------------Start Item ---------------*/}
        <Grid item>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="./images/rocket.svg"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Fusée MK-1 (Dit "La birque")
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Une bonne fusée si elle pouvait voler
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      SVG
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      + d'information
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$19.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* ----------------End Item ---------------*/}
        <Grid item>
          <Paper>ITEM 2</Paper>
        </Grid>
        <Grid item>
          <Paper>ITEM n</Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
