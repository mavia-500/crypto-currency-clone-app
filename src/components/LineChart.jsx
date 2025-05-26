
import React from 'react';
import { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
// import {LinearScale} from "chart.js"
const { Title } = Typography;
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale, // <--- Add this import!
    PointElement,
    LineElement,
     // This Title is for Chart.js title plugin, not Ant Design
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale, // <--- Add this registration!
    PointElement,
    LineElement,
   
  );
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    // console.log(coinHistory, currentPrice, coinName)
    const chartRef = useRef(null)
    const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        type: 'linear', // <--- Explicitly set the scale type for y-axis
      },
      x: {
        type: 'category', // <--- Explicitly set the scale type for x-axis
        // If your timestamps were more complex (e.g., hourly, minutes), you'd use 'time' type with an adapter
      },
    },
    plugins: {
      title: {
        display: false, // We are using Ant Design's Typography for the title
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        display: true,
      },
    },
  };
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      {coinHistory?.data?.history?.length > 0 && (
        <Line
          data={data}
          options={options}
          key={coinName || 'default-chart-key'} // Use coinName as a key, or a unique ID if available
          ref={chartRef} // You can still use the ref if you need to access the chart instance directly for other operations
        />
      )}
    </>
  );
};

export default LineChart;