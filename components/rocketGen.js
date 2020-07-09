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

const colorsC = ["#677C83","#C08497","#F7AF9D","#F7E3AF","#6d6875"];
const colorsB = ["#ffffff","#cb997e","#8d99ae","#aed9e0","#1d3557"]; //ok
const colorsA = ["#ffffff","#457b9d","#e63946","#aed9e0","#1d3557"];

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
const marksMatiere = [
    {
        value: 0,
        label: 'Oreiller'
    },
    {
        value: 1,
        label: 'Cagette'
    },
    {
        value: 2,
        label: 'Pierre'
    },
    {
        value: 3,
        label: 'Acier'
    }, {
        value: 4,
        label: 'Nanotube carbone'
    }
];
const marksCharge = [
    {
        value: 0,
        label: 'Rien'
    },
    {
        value: 1,
        label: 'Un chat'
    },
    {
        value: 2,
        label: 'Un Humain'
    },
    {
        value: 3,
        label: 'Le Titanic'
    }, {
        value: 4,
        label: 'La dette mondial'
    }
];

const rocketList = [
    "http://localhost:3000/images/rocket-2.svg",
    "http://localhost:3000/images/rocket-3.svg",
    "http://localhost:3000/images/rocket-4.svg"
]

export default function RocketGen() {
    const classes = useStyles();
    let svg = useRef();
    let svgUrl = "./images/rocket.svg";
    const table = rocketList.length-1;
    
    const handlePrevModele = (e) =>{
        let n = rocketList.findIndex(el => el == svg.current.data);
        if(n-1 >= 0){
            n--;
        }else{
            n = table;
        }
        svg.current.data = rocketList[n];
    }

    const handleNextModele = (e)=>{
        let n = rocketList.findIndex(el => el == svg.current.data);
        if(n+1 <= table){
            n++;
        }else{
            n = 0
        }
        svg.current.data = rocketList[n];
    }

    const handleSliderChangeA = (event, newValue) => {
        // console.log(svg.current.getSVGDocument().getElementsByClassName("colorA"));
        let colorA = svg.current.getSVGDocument().getElementsByClassName("colorA");
        for(let path of colorA){
            path.setAttribute("fill", colorsA[newValue])
        }
    };

    const handleSliderChangeB = (event, newValue) => {
        // console.log(svg.current.getSVGDocument().getElementsByClassName("colorB"));
        let colorB = svg.current.getSVGDocument().getElementsByClassName("colorB");
        for(let path of colorB){
            path.setAttribute("fill", colorsB[newValue])
        }
    };

    const handleSliderChangeC = (event, newValue) => {
        // console.log(svg.current.getSVGDocument().getElementsByClassName("colorC"));
        let colorC = svg.current.getSVGDocument().getElementsByClassName("colorC");
        for(let path of colorC){
            path.setAttribute("fill", colorsC[newValue])
        }
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
                    <IconButton onClick={handlePrevModele}>
                        <ArrowBackIosIcon></ArrowBackIosIcon>
                    </IconButton>
                    <Typography>Sélection du model</Typography>
                    <IconButton onClick={handleNextModele}>
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
                        data={svgUrl}></object>
                </div>

                <CardContent className={
                    classes.cardContent
                }>
                    <Typography id="matiere" gutterBottom>
                        Matière
                    </Typography>
                    <Slider defaultValue={0}
                        onChange={handleSliderChangeB}
                        track={false}
                        aria-labelledby="matiere"
                        step={null}
                        marks={marksMatiere}
                        min={0}
                        max={4}
                        />

                    <Typography id="charge" gutterBottom>
                        Charge utile
                    </Typography>
                    <Slider defaultValue={0}
                        onChange={handleSliderChangeC}
                        track={false}
                        aria-labelledby="matiere"
                        step={null}
                        marks={marksCharge}
                        min={0}
                        max={4}
                        />

                    <Typography id="carburant" gutterBottom>
                        Carburant
                    </Typography>
                    <Slider defaultValue={0}
                        onChange={handleSliderChangeA}
                        track={false}
                        aria-labelledby="carburant"
                        step={null}
                        marks={marksEnergy}
                        min={0}
                        max={4}
                        />
                        

                </CardContent>
            </Card>
        </Paper>
    );
}
