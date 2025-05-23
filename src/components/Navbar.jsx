import React from 'react'
import { Button,Menu,Typography,Avatar } from 'antd'
import {Link, Links} from "react-router-dom"
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from "@ant-design/icons";
import icon from '../images/cryptocurrency.png'
import { icons } from 'antd/es/image/PreviewGroup'
const Navbar = () => {
  const menuItem=[
    {
      label:<Link to='/'>Home</Link>,
      key:"home",
      icon:<HomeOutlined/>

    },
    {
      label:<Link to='/cryptocurrencies'>Cryptocurrencies</Link>,
      key:"cryptocurrencies",
      icon:<FundOutlined/>

    },
    {
      label:<Link to='/exhanges'>Exchanges</Link>,
      key:"exchanges",
      icon:<MoneyCollectOutlined/>

    },
    {
      label:<Link to='/news'>news</Link>,
      key:"news",
      icon:<BulbOutlined/>

    }
    
  ]
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className='logo'>
                <Link to="/">Crytoverse</Link>
            </Typography.Title>
            {/* <Button className='menu-control-container'></Button> */}
        </div>
       <Menu theme='dark' defaultSelectedKeys={['home']} items={menuItem}/>
       
    
       
       
       
       
    </div>
  )
}

export default Navbar