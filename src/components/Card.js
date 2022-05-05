import React from "react";

class Card extends React.Component {

  render(){
    return(
      <div
        style={styles.card}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  card: {
    margin: "0 15%",
    marginBottom: "15px",
    background: "#fff",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "left",
    boxShadow: "0 10px 8px rgba(0,0,0,.25)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
}

export default Card;