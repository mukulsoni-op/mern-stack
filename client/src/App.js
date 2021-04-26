// import logo from './logo.svg';
import './App.css';
import {Container, Grid, Typography, appBar, Grow} from "@material-ui/core";
import Student from "./components/showStudent/showStudent";
import Create from "./components/createStudents/createStudent";
import useStyles from "./styles";


function App() {

  const classes  = useStyles(); 
  return (
    <div className="App">
     <Container maxWidth="lg"> 
     <appBar className={classes.appbar} position= "static" color="inherit">
       <Typography className= {classes.heading} variant="h2" align="centre">Students create and show</Typography>
     </appBar>

     <Grow in>
     <Container>
       <Grid container justify="space-between" alignItems="strect" >
       <Grid item xs={12} sm={7}>
       <appBar className={classes.appbar} position= "static" color="inherit" >
         <Student>

         </Student>
         
       </appBar>
       </Grid>
       <Grid item xs ={12} sm={4}></Grid>
       <appBar className={classes.appbar} position= "static" color="inherit" >
         <Create>

         </Create>
         
       </appBar>
       </Grid>
     </Container>

     </Grow>
     </Container>
    </div>
  );
}

export default App;
