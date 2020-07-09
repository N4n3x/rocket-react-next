import React from "react";
import {useRef, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    Paper,
    Grid,
    Typography,
    Button,
    CardHeader,
    Slider,
    IconButton
} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 240,
        margin: "0.5rem"
    },
    mediaContainer: {
        textAlign: "center"
    },
    titre: {
        textAlign: "center",
        padding: "0.5rem"
    },
    modelSelectContainer:{
        display:"flex",
        justifyContent: "space-between",
        alignItems:"center"
    },
});

function valuetext(value) {
    return `${value}°C`;
}

export default function RocketGen() {
    const classes = useStyles();
    let svg = useRef();
    return (
        <Paper spacing={1}>
            <Card className={
                classes.root
            }>

                <Typography gutterBottom variant="h5" component="h2"
                    className={
                        classes.titre
                }>
                    Créé ta fusée !!!
                </Typography>
                <div className={
                    classes.modelSelectContainer
                }>
                    <IconButton >
                        <ArrowBackIosIcon></ArrowBackIosIcon>
                    </IconButton>
                    <Typography>Sélection du model</Typography>
                    <IconButton>
                        <ArrowForwardIosIcon></ArrowForwardIosIcon>
                    </IconButton>
                </div>
                <div className={
                    classes.mediaContainer
                }>
                    <object className={
                            classes.media
                        }
                        type="image/svg+xml"
                        ref={svg}
                        data="./images/rocket.svg"></object>
                </div>

                <CardContent>
                    <Typography id="puissance" gutterBottom>
                        Puissance
                    </Typography>
                    <Slider defaultValue={0}
                        getAriaValueText={valuetext}
                        aria-labelledby="puissance"
                        step={50}
                        marks
                        min={0}
                        max={255}
                        valueLabelDisplay="auto"/>

                    <Typography id="charge" gutterBottom>
                        Charge utile
                    </Typography>
                    <Slider defaultValue={0}
                        getAriaValueText={valuetext}
                        aria-labelledby="charge"
                        step={50}
                        marks
                        min={0}
                        max={255}
                        valueLabelDisplay="auto"/>

                    <Typography id="carburant" gutterBottom>
                        Carburant
                    </Typography>
                    <Slider defaultValue={0}
                        getAriaValueText={valuetext}
                        aria-labelledby="carburant"
                        step={50}
                        marks
                        min={0}
                        max={255}
                        valueLabelDisplay="auto"/>

                </CardContent>
            </Card>
        </Paper>
    );
}
