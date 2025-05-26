import React from 'react'
import { Button,Menu,Typography,Avatar } from 'antd'
import {Link, Links} from "react-router-dom"
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from "@ant-design/icons";
import icon from '../images/cryptocurrency.png'
import { icons } from 'antd/es/image/PreviewGroup'
import { useState,useEffect } from 'react';
const Navbar = () => {

  const [activeMenu,setActiveMenu]=useState(true);
  const [screenSize,setScreenSize]=useState(null)

  useEffect(()=>{
const handleResize=()=>setScreenSize(window.innerWidth)

window.addEventListener('resize',handleResize);
handleResize();

return ()=>window.removeEventListener('resize',handleResize)
  },[])

  useEffect(()=>{
if(screenSize<768){
  setActiveMenu(false);
}
else{
  setActiveMenu(true)
}
  },[screenSize])
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
            <Button className='menu-control-container' onClick={()=>setActiveMenu(!activeMenu)}>
              <MenuOutlined/>
            </Button>
        </div>
        {activeMenu &&
       <Menu theme='dark'  items={menuItem} defaultSelectedKeys={["home"]}/>
      }
    
       
       
       
       
    </div>
  )
}

export default Navbar