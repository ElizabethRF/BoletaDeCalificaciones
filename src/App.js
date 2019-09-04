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
import { subjects } from './data/subjects.json';


class App extends React.Component{
  constructor(props){
    super(props); 
    this.state = {listGrades:  null, hardcodedValues : subjects,  received: false}
  }

  gradesData = (params)=>{
    this.setState({ listGrades: params,received : true});
    console.log("params");
    console.log( params);
    console.log("params");
    console.log( params);
  }

  test() {
    const {listGrades} = this.state; 
    if(listGrades !== null){
      return <Average gradesList={this.state.listGrades} /> ; 
        
    }
    return null; 
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
              {this.test()}
            </CardContent>
          </Card>
        </Grid>
  
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grades funcionParaHijo = {this.gradesData} sentData={this.state.received}/>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
      
      </div> 

);

}
  



}

export default App;
