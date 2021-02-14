import React, { Component } from "react";

class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleChangeMonthly = this.handleChangeMonthly.bind(this);
    this.handleChangeRate = this.handleChangeRate.bind(this);
    this.handleChangeTerm = this.handleChangeTerm.bind(this);
  }

  handleChangeMonthly(e) {
    this.props.monthlyChanged(e.target.value)
  }
  handleChangeRate(e) {
    this.props.rateChanged(e.target.value)
  }
  handleChangeTerm(e) {
    this.props.termChanged(e.target.value)
  }

  render() {
    return (
      <fieldset>
        <legend>Enter input values</legend>
        Monthly Payment:
        <input type='number'
               value={this.props.monthly}
               onChange={this.handleChangeMonthly}
        />
        Yearly rate
        <input type='number'
               value={this.props.rate}
               onChange={this.handleChangeRate}
        />
        Number of years
        <input type='number'
               value={this.props.term}
               onChange={this.handleChangeTerm}
        />
      </fieldset>
    );
  }
}

export default Controls