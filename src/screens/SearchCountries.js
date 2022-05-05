import React from "react";
import { AppContext } from "../contexts/AppContext";
import { validateInput } from "../utils/helpers";
import { COUNTRY_API } from "../utils/constants"; 

import Card from "../components/Card";

class SearchCountries extends React.Component{

  constructor(){
    super();

    this.state = {
      text: ""
    }
  }

  static contextType = AppContext;

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${COUNTRY_API}/${this.state.text}`)
      .then((resp) => {
        resp.json().then(data => {
          if(Array.isArray(data) && data.length){
            this.context.setCountry(data[0]);
            this.props.history.push("/country");
          }
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  isButtonDisabled(){
    return validateInput(this.state.text);
  }

  render(){
    return(
      <div>
        <Card>
          <h2>Search Countries</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Country Name"
              className="input"
            />
            <input
              type="submit"
              name="Submit"
              className="button"
              disabled={!this.isButtonDisabled()}
            />
          </form>
        </Card>
      </div>
    );
  }
}

export default SearchCountries;