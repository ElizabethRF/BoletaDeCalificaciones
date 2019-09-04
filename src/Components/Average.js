import React , {Component} from 'react';



class Average extends React.Component{
    constructor(props){
        super(props);
    }
  
    render(){
    var average  = 0; 

    const gradeValues = this.props.gradesList; 


    const subj = gradeValues.map((x,i) => {
        average += x.calificacion; 

    }); 


    average = average/6; 
    console.log(average);



    
      return(
          <div>
            <h1>Promedio</h1>
            <p>{average}</p>
          </div>
      ); 
     

     

  }
}


export default Average; 