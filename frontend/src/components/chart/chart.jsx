import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class Chart extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    console.log('change')
  };

  render() {
    return (
      <div>
        <AreaChart
          width={500}
          height={400}
          data={this.props.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Amt" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    );
  }
}

export default Chart
