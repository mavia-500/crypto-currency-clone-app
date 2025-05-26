import React from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi.js'
import {CrptoCurrencies,News} from '../components'
const Home = () => {
    const {Title}=Typography;
  const {data,isFetching,error}=useGetCryptosQuery(10);

 if (isFetching) return 'Loading...';
  if (error) return `Error: ${error.message}`
const globlaStats=data?.data?.stats
  return (
    <>
    <Title level={2} className='heading'>Global crypto stats</Title>
    <Row>
        <Col span={12}><Statistic title="total cryptocurrencies" value={globlaStats.total}/></Col>

        <Col span={12}><Statistic title="total excahnges" value={millify(globlaStats.totalExchanges)}/></Col>

        <Col span={12}><Statistic title="total market cap" value={millify(globlaStats.totalMarketCap)}/></Col>

        <Col span={12}><Statistic title="total c24 volume" value={millify(globlaStats.total24hVolume)}/></Col>

        <Col span={12}><Statistic title="total Market" value={millify(globlaStats.totalMarkets)}/></Col>

        
    </Row>
    <div className='home-heading-container'>
<Title level={2} className='home-title'>Top 10 CryptoCurrencies in the world</Title>
<Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <CrptoCurrencies simplified/>
    
    <div className='home-heading-container'>
<Title level={2} className='home-title'>Latest Crypto News</Title>
<Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>
    </div>
    <News simplified/>
    
    </>

  )
}

export default Home