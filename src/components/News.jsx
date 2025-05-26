import React from "react";
import { Select, Typography, Row, Col, Card, Avatar } from "antd";
import moment from "moment";
import { newsApi, useGetNewsQuery } from "../services/cryptoNewsApi";
const { Text, Title } = Typography;
const { Option } = Select;
const News = ({ simplified }) => {
  // console.log(useGetNewsQuery() )
  const { currentData } = useGetNewsQuery({ count: simplified ? 10 : 50 });
  const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
  if (!currentData?.data) return "Loading...";
  // console.log(currentData.data);
  return (
    <Row gutter={[24, 24]}>
      {currentData.data.map((dat, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={dat.link} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {dat.title}
                </Title>
                <img src={dat.photo_url || demoImage} alt="unable to fetch" style={{maxHeight:"100px",maxWidth:"100px"}}  />
              </div>
              <p>
                {dat.snippet > 100
                  ? `${dat.snippet.substring(0, 100)}...`
                  : dat.snippet}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={dat.thumbnail_url || demoImage} alt="unable to loab"/>
                  <Text className="provider-name">{dat.authors}</Text>
                </div>
                <Text>{moment(dat.published_datetime_utc).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
