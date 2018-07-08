import React, {Component} from "react";
 
import './Person.css';

const person=(props)=>{
   return (
    <div className="Person">  
        <p>I am {props.name}. My age is {props.age}. My random score is:{Math.floor(Math.random() * 100)}</p>
        <input onChange={props.changed} value={props.name} type="text"/>
    </div> 
   );  
}

export default  person; 