import React, {Component} from "react";

const person=(props)=>{
   return (
    <p>I am {props.name}. My age is {props.age}. My random score is:{Math.floor(Math.random() * 100)}</p>

   ); 
}

export default  person;