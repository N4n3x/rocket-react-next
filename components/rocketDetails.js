import styles from './rocketDetails.module.scss'
import { Card, CardHeader, CardMedia, CardContent, Typography, Button } from '@material-ui/core'
import Link from 'next/link'

const stringToHTML = (props) => {
    return {__html: props.rocket.rkt_desc};
  }

const RocketDetails = (props) => {
    return(
        <div className={styles.root}>
            <Card className={styles.card}>
                <CardHeader title={props.rocket.rkt_name}></CardHeader>
                <CardMedia image={`http://localhost:1337${props.rocket.rkt_img[0].url}`} className={styles.image}></CardMedia>
                <CardContent><Typography dangerouslySetInnerHTML={stringToHTML(props)}></Typography></CardContent>
            </Card>
            <Link href="./">
                <Button variant="contained" color="primary" href="#contained-buttons" style={{width: "40rem"}}>
                    Retour à la galerie
                </Button>
            </Link>
        </div>
    )
}

export default RocketDetails;