import Header from '../components/Header'
import {AppBar, Toolbar, Grid, Typography, Button} from '@material-ui/core'

const FicheProduit = (props) => {
  return (
    <div className="container">
      <Header></Header>
      <div style={{flexGrow: "1"},{marginTop: "1rem"}}>
        <Grid container spacing={1} justify="center" alignItems="flex-start">
          <Grid item md={8} sm={12}>
            
          </Grid>
          <Grid item md={4} sm={12}>
           
          </Grid>
        </Grid>
      </div>
      <h1>{props.rocket.rkt_name}</h1>
    </div>
  )
};

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const query = `
    query {
      rockets(limit: 1, where: { rkt_slug: "${slug}"}) {
        rkt_name
        rkt_desc
        rkt_slug
      }
    }
  `;
  const url = "http://localhost:1337/graphql";
  const opts = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Autorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk0MTQ4NDM5LCJleHAiOjE1OTY3NDA0Mzl9.eBsLAox_TkkftqbrKIDCDCCaOu4vjQ_6094eD2JirAM"
    },
    body: JSON.stringify({ query })
  };
  let response = await fetch(url, opts);
  let rocket = await response.json();

  return {
    props: {
      rocket: rocket.data.rockets[0]
    }
  }
};

export default FicheProduit;