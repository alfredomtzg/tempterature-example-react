import React, { useState } from 'react';
import {NavBar} from './Navbar'

export default function App() {

  const[temperatureValue, setTemperatureValue] = useState(10);
  const[temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    
    const newTemperature = temperatureValue + 1;
    if(temperatureValue === 30) {
      setTemperatureColor("fire");
      return;
    }
    if(newTemperature >= 15){
      setTemperatureColor("hot");
    }
    
    setTemperatureValue( newTemperature )
  }

  const decreaseTemperature = () => {
    
    const newTemperature = temperatureValue - 1;
    if(newTemperature <= 29){
      setTemperatureColor("hot");
      if(newTemperature < 15){
        setTemperatureColor("cold");
      }
    }
    setTemperatureValue( newTemperature )
  }

  return(
    <section className="app-container" >
      <NavBar/>
      <div className="temperature-display-container" >
        <div className={`temperature-display ${temperatureColor}`} > {temperatureValue}°C</div>
      </div>
      <div className="button-container" >
        <button onClick={() => increaseTemperature()} >+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </section>
  )
}