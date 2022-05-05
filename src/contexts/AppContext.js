import React from "react";

export const AppContext = React.createContext(null);

export const AppProvider = (props) => {

  const [countryData, setCountryData] = React.useState({});
  const [weatherData, setWeatherData] = React.useState({});

  return(
    <AppContext.Provider value={{
      country: countryData,
      setCountry: setCountryData,
      weather: weatherData,
      setWeather: setWeatherData
    }}>
      {props.children}
    </AppContext.Provider>
  );
}