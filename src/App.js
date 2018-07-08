import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person"; 

class App extends Component {
  state={
    persons:[
      {name:'Uday',age:25},
      {name:'Saurabh',age:24}, 
      {name:'Dharmendra',age:26}]
  }

  switchNameHandler= () => {
     //this.state.persons[0].name="Diksha";
     //Don't write like the one above
  this.setState({persons:[
    {name:'ud',age:0},
    {name:'Mitthu',age:0},
    {name:'Kalu ',age:0}

  ]});
    }

  nameChangeHandler=(event)=>{
    this.setState({persons:[
      {name:'Uday',age:25},
      {name:event.target.value,age:26},
      {name:'Dhanrmendra ',age:27}
  
    ]});
  };  

  render() {
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'How you doin!'));
    
    const buttonStyle={
      'background-color':'grey',
      'border':'1px solid black',
      'box-shadow':'1px 1px 2px',
      'font':'inherit',
      'cursor':'pointer',
      'color':'white'
    };

     return(
     <div className="App">
        <div>
          <h1>Hi....this is the first React Application</h1>
          <p>Let's see who all are here...</p>
        </div>
        <button style={buttonStyle} onClick={this.switchNameHandler} >Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person changed={this.nameChangeHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>I like Singing!!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
     );
  }
}

export default App;
