import React, { Component } from "react";
import Header from '../header'
import Responses from "../responses";
import Controls from "../controls";
import Chart from '../chart';

class App extends Component {
  constructor(props) {
    super(props);
    this.post = this.post.bind(this);
    this.monthlyChanged = this.monthlyChanged.bind(this);
    this.rateChanged = this.rateChanged.bind(this);
    this.termChanged = this.termChanged.bind(this);
    this.state = {
      responses: [],
      monthly: 100,
      rate: 5,
      term: 40,
    }
  }

  monthlyChanged(newMonthly) {
    this.setState({monthly: newMonthly}, this.post);
  }
  rateChanged(newRate) {
    this.setState({rate: newRate}, this.post);
  }
  termChanged(newTerm) {
    console.log(newTerm)
    this.setState({term: newTerm}, this.post);
  }

  post() {
    const calcInfo = {
      monthly: parseInt(this.state.monthly),
      rate: parseInt(this.state.rate),
      term: parseInt(this.state.term),
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(calcInfo)
    };

    fetch('http://localhost:8080/calc', requestOptions)
      .then(response => response.json())
      .then(data => this.setState(
        prevState => ({
          responses: [...prevState.responses, data]
        })
      ));
  }

  render() {
    console.log(this.state.responses)
    return (
      <div className="app">
        <Header />
        <Controls
          monthly={this.state.monthly}
          rate={this.state.rate}
          term={this.state.term}
          monthlyChanged={this.monthlyChanged}
          rateChanged={this.rateChanged}
          termChanged={this.termChanged}
        />
        <Responses responses={this.state.responses} />
        <button onClick={this.post}>POST</button>
        <Chart />
      </div>
    );
  }
}
  
  export default App;