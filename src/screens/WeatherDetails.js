import React from "react";
import { AppContext } from "../contexts/AppContext";

import Card from "../components/Card";

class WeatherDetails extends React.Component{

  static contextType = AppContext;

  render(){
    const { weather } = this.context;

    return(
      <div>
        <Card>
          <h2>Weather Details</h2>
          <h3>Temperature: {weather.current?.temperature} Celsius</h3>
          <img src={weather.current.weather_icons?.[0]} />
          <p>Wind speed: {weather.current?.wind_speed} m/s</p>
          <p>Time zone id: {weather.location?.timezone_id}</p>
        </Card>
      </div>
    );
  }
}

export default WeatherDetails;