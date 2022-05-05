import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SearchCountries from "./screens/SearchCountries";
import CountryDetails from "./screens/CountryDetails";
import WeatherDetails from "./screens/WeatherDetails";

function Router(){

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchCountries} />
        <Route exact path="/country" component={CountryDetails} />
        <Route exact path="/weather" component={WeatherDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;