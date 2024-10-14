import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import seriesData from "src/api/data.json";
import { Fragment } from 'react';
export const App = () =>{
  return (
    <Fragment>
    <NetFlixSeries />
    <NetFlixSeries />
    <NetFlixSeries />

    </Fragment>
  
    


    

  );
};
const NetFlixSeries = () =>{
  const appIntro = "This is a gaming app";
  const detail = "This app contains authentication system , movies recommendation on basis of user input , stores feedback of each movie from user , display each feedback to all users , rating list, some games;"
  const name = "Horror Movie";
  const ratings = 5;
  const age = 16;
  const returnGenre = () => {
    const genre = "Horror";
    return genre;


  };
  if (age < 18)
  {  
    return (
    <div>
      <div>
        <img src="rename.jpeg"  width="40%" height = "40%" />
      </div>
      <div>
        <h1>{appIntro}</h1>
      </div>
      <div>
        <h2>{detail}</h2>
      </div>
      <div>
        <h3>{returnGenre()}</h3>
      </div>
      <div>
        <button>
          Not available
        </button>
      </div>
    </div>


   );
  }

  return (
    

    <div>
      <div>
        <img src="rename.jpeg" width="40%" height = "40%" />
      </div>
      <div>
        <h1>{appIntro}</h1>
      </div>
      <div>
        <h2>{detail}</h2>
      </div>
      <div>
        <h3>{returnGenre()}</h3>
      </div>
      <div>
        <button>
          watch now
        </button>
      </div>
    </div>


  );

}
export default App
