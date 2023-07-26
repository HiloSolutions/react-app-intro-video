import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [joke, setJoke] = useState('');

  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = Math.round((time % 100) / 10);

  useEffect(() => {
    let intervalID;

    if (isRunning) {
      intervalID = setInterval(() => setTime(prev => prev + 1), 10)
    }

    return () => clearInterval(intervalID);

  },[time, isRunning])


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
  }, [isRunning, seconds, milliseconds])


  const handleStart = () => {
    setIsRunning(true);
  }

  const handlePause = () => {
    setIsRunning(false);
  }

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  }

  console.log(joke);

  return (
    <div className="container">
      <h2>V4 - React useEffect hook (Timer)</h2>
      <div className="display">
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}:
        {milliseconds === 10 ? '0' : milliseconds.toString()}
      </div>
      <div className="button">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <p>{joke.value}</p>
    </div>
  );
};

export default Timer;