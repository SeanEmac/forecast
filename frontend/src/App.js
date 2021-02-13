import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  sendPost() {
    const calcInfo = {
      monthly: 100,
      rate: 5,
      duration: 20,
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(calcInfo)
    };
    fetch('http://localhost:8080/calc', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.sendPost}>Send POST</button>
      </div>
    );
  }
}

export default App;
