import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./api/dataa.json";
import { Fragment } from 'react';
import {List} from "./components/List"
export const App = () =>{
  return (
    <Fragment>
    <NetFlixSeries />
    
    

    </Fragment>
  
    


    

  );
};
const NetFlixSeries = () => {
  return (
    <ul>
      {data.map((curElem) => (
        <List key={curElem.title} curElem={curElem}/>
        
      ))}
    </ul>
  );
};

export default App
