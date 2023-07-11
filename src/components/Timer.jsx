import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [joke, setJoke] = useState(null);


  //variables
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = Math.round((time % 100) / 10);

  //useEffect hooks

  //responsible for updating the timer's time state at a regular interval when the isRunning state is true.
  useEffect(() => {
    //The intervalId variable is used to keep track of the interval and is cleared when the component unmounts or when the isRunning or time dependencies change.
    let intervalId;
    //It sets up a timer using setInterval and increments the time state by 1 every 10 milliseconds.
    if (isRunning) {
      intervalId = setInterval(() =>  setTime(time + 1), 10); //
    }
    //The intervalId variable is used to keep track of the interval and is cleared when the component unmounts or when the isRunning or time dependencies change.
    return () => clearInterval(intervalId);
  }, [isRunning, time]);


  useEffect(() => {
    if(isRunning) {
      const fetchJoke = async () => {
        let response = await fetch('https://api.chucknorris.io/jokes/random');
        let data = await response.json();
        setJoke(data);
      };
  
      if (seconds % 5 === 0 && milliseconds === 0) {
        fetchJoke();
      }
    }
  }, [isRunning, seconds, milliseconds]);



  //event handlers
  const startAndPause = () => {
    setIsRunning(prev => !prev);
  }

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  }

  return (
    <div className="container">
      <h2>V4 - React useEffect hook (Timer)</h2>
      <div className="display">
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}:
        {milliseconds === 10 ? '0' : milliseconds.toString()}
      </div>
      <div className="button">
        <button onClick={startAndPause}>Start</button>
        <button onClick={startAndPause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {joke && <p>{joke.value}</p>}
    </div>
  );
};

export default Timer;