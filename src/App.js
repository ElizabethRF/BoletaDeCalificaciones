import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PersonalData from './Components/PersonalData';
import Average from './Components/Average';
import Grades from './Components/Grades';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class App extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      listGrades: null
    }; 
  }

  gradesData= (params)=>{
    this.setState({ listGrades: params})
  }

  render(){
    return (
      <div>
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" >
              Boleta de calificaciones
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2}>
        <Grid item xs={6}>
            <Card>
            <CardContent>
              <PersonalData/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Average gradesFromApp={gradesData}/>
            </CardContent>
          </Card>
        </Grid>
  
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grades gradesFromApp={this.gradesData}/>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
      
      </div> 

);}
  
}

export default App;
