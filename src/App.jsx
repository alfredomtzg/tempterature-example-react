import React, { useState } from 'react';

export default function App() {

  const[temperatureValue, setTemperatureValue] = useState(10);
  const[temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    setTemperatureValue( temperatureValue + 1 )
  }

  return(
    <div className="app-container" >
      <div className="temperature-display-container" >
        <div className={`temperature-display ${temperatureColor}`} > {temperatureValue}°C</div>
      </div>
      <div className="button-container" >
        <button onClick={() => increaseTemperature()} >+</button>
        <button onClick={() => setTemperatureValue(temperatureValue-1)}>-</button>
      </div>
    </div>
  )
}