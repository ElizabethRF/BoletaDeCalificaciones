import React , {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { subjects } from '../data/subjects.json';
class Grades extends React.Component{
    constructor(props){
        super(props); 
        this.state = { subjects}
        const subjectss  ={subjects}
    }
    
    
    render(){

      this.props.gradesFromApp(subjects);
        const subj = this.state.subjects.map((x,i) => {
            return(
                <TableRow >
                <TableCell component="th" scope="row">
                    {x.nombre}
                </TableCell>
                <TableCell align="right">{x.calificacion}</TableCell>
              </TableRow>
            );

        }); 


      return(
        <div>
        <h1>Calificaciones</h1>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Asignatura</TableCell>
              <TableCell align="right">Calificación</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subj}
          </TableBody>
        </Table>
        </div>
      
      
        ); 
       
  }
}


export default Grades;