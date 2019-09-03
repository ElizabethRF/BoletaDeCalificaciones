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

function App() {
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
      <Grid item xs={4}>
          <Card>
          <CardContent>
            <PersonalData/>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Average/>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={7}>
        <Card>
          <CardContent>
            <Grades/>
          </CardContent>
        </Card>
      </Grid>
      </Grid>
    
    
    
    </div>
    
  );
}

export default App;
