import React from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi.js'
const Home = () => {
    const {Title}=Typography;
const {data,isFetching,error}=useGetCryptosQuery();
 if (isFetching) return 'Loading...';
  if (error) return `Error: ${error.message}`
console.log(data)
  return (
    <>
    <Title level={2} className='heading'>Global crypto stats</Title>
    <Row>
        <Col span={12}><Statistic title="total cryptocurrencies" value={5}/></Col>

        <Col span={12}><Statistic title="total excahnges" value={5}/></Col>

        <Col span={12}><Statistic title="total market cap" value={5}/></Col>

        <Col span={12}><Statistic title="total c24 volume" value={5}/></Col>

        <Col span={12}><Statistic title="total Market" value={5}/></Col>

        
    </Row>
    
    
    </>

  )
}

export default Home