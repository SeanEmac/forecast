import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: 2020,
    amt: 1000,
  },
  {
    name: 2021,
    amt: 1500,
  },
  {
    name: 2022,
    amt: 2000,
  },
];

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
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="amt" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    );
  }
}

export default Chart
