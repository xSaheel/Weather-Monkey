import React from "react";

function Weather(props) {
  return (
    <div className="container">
      <div className="cards">
        <h1>{props.cityName}</h1>
        {props.tempCelsius ? (
          <h2>
            {props.tempCelsius}° <i className={`wi ${props.weatherIcon}`} />
          </h2>
        ) : null}
        <h3>{props.description}</h3>
      </div>
    </div>
  );
}

export default Weather;
