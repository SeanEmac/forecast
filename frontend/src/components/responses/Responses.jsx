import React, { Component } from "react";

class Responses extends Component {
  render() {
    const messages = this.props.responses.map((res, index) => (
      <p key={index}>{res.Monthly} {res.Rate} {res.Term}</p>
    ));

    return (
      <div className="responses">
        <h2>Responses</h2>
        {messages}
      </div>
    );
  }
}

export default Responses;