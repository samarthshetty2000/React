import React from "react";
import { AppContext } from "../contexts/AppContext";
import { WEATHER_API } from "../utils/constants"; 

import Card from "../components/Card";

class CountryDetails extends React.Component{
  
  // const context = React.useContext(AppContext)
  static contextType = AppContext;

  getWeatherDetails = () => {
    fetch(`${WEATHER_API}&query=${this.context.country?.capital?.[0]}`)
    .then((resp) => {
      resp.json().then(data => {
        this.context.setWeather(data);
        this.props.history.push("/weather");
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render(){
    const { country } = this.context;

    return(
      <div>
        <Card>
          <h2>Country Details</h2>
          <h3>{country.name?.common}</h3>
          <img src={country.flags.png} />
          <p>Population: {country.population}</p>
          <p>Latitude: {country.latlng?.[0]}, Longitude: {country.latlng?.[1]}</p>
          <button
            onClick={this.getWeatherDetails}
            className="button"
          >
            Capital Weather
          </button>
        </Card>
      </div>
    );
  }
}

export default CountryDetails;