import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";
class App extends Component {
  render() {
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'How you doin!'));
     return(
     <div className="App">
        <div>
          <h1>Hi....this is the first React Application</h1>
        </div>
        <Person name="UD" age={25}></Person>
        <Person name="Mitthu" age={24}></Person>
        <Person name="kalu" age={26}></Person>
      </div>
     );
  }
}

export default App;
