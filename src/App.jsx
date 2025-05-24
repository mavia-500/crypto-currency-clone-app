import React from "react";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  Home,
  CrptoCurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./app.css";
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cryptocurrencies" element={<CrptoCurrencies />} />
              <Route path="/exhanges" element={<Exchanges />} />

              <Route path="/crypto/:coinId" element={<CryptoDetails />} />

              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer" level={5}>
          <Typography.Title style={{ color: "white", textAlign: "center" }}>
            Cryptoverse <br /> All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/"> Home</Link>
            <Link to="/exchanges"> exchanges</Link>
            <Link to="/news"> News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
