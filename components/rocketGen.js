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
    root: {},
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
    modelSelectContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cardContent: {
        margin: "2rem"
    }
});

const colors = ["#677C83","#C08497","#F7AF9D","#F7E3AF","#F3EEC3"]

const marksEnergy = [
    {
        value: 0,
        label: 'Huile de coude'
    },
    {
        value: 1,
        label: 'Vodka'
    },
    {
        value: 2,
        label: 'Sans plomb'
    },
    {
        value: 3,
        label: 'Hydrogène'
    }, {
        value: 4,
        label: 'Matière noir'
    }
];

export default function RocketGen() {
    const classes = useStyles();
    let svg = useRef();

    const handleSliderEnergyChange = (event, newValue) => {
        console.log(svg.current.getSVGDocument().getElementsByClassName("colorA"));
        let colorA = svg.current.getSVGDocument().getElementsByClassName("colorA");
        for(let path of colorA){
            path.setAttribute("fill", colors[newValue])
        }
        // svg.current.getSVGDocument().getElementById("aileG").setAttribute("fill", colors[newValue]);
        

    };

    return (
        <Paper>
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
                    <IconButton>
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

                <CardContent className={
                    classes.cardContent
                }>
                    <Typography id="matiere" gutterBottom>
                        Matière
                    </Typography>
                    <Slider defaultValue={0}
                        // getAriaValueText={valuetext}
                        aria-labelledby="matiere"
                        step={50}
                        marks
                        min={0}
                        max={255}
                        valueLabelDisplay="auto"/>

                    <Typography id="charge" gutterBottom>
                        Charge utile
                    </Typography>
                    <Slider defaultValue={0}
                        // getAriaValueText={valuetext}
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
                        onChange={handleSliderEnergyChange}
                        track={false}
                        aria-labelledby="carburant"
                        step={null}
                        marks={marksEnergy}
                        min={0}
                        max={4}/>
                        

                </CardContent>
            </Card>
        </Paper>
    );
}
