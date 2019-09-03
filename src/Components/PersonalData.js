import React , {Component} from 'react';

import { people } from '../data/people.json';
console.log(people); 
class PersonalData extends React.Component{
    constructor(){
        super(); 
        this.state = { people }
    }
    render(){
      return(
          <div>
            <h1>Datos personales</h1>
                  <p>{this.state.people[0].nombre}  {this.state.people[0].apellidos}</p>
                  <p>{this.state.people[0].carrera}  Semestre: {this.state.people[0].semestre}</p>
                
          </div>
        
      );
    }
  }

  export default PersonalData; 