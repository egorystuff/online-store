import React from "react";
import { Col, Container, Image, Row, Card, Button } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";

const DevicePage = () => {
  const device = { id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "http://placehold.it/150x150" };
  const description = [
    { id: 1, title: "Оперативная память", description: "5 Gb" },
    { id: 2, title: "Оперативная ", description: "5 Gb" },
    { id: 3, title: "Оперативная память", description: "5 Gb" },
    { id: 4, title: "Оперативная ", description: "5 Gb" },
    { id: 5, title: "память", description: "5 Gb" },
  ];

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>

        <Col md={4}>
          <Row className='d-flex align-items-center flex-column'>
            <h2>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 280,
                height: 280,
                backgroundSize: "cover",
                fontSize: 64,
              }}>
              {device.rating}
            </div>
          </Row>
        </Col>

        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{ width: 300, height: 300, fontSize: 32, border: "5px solid lightgray" }}>
            <h3>от: {device.price} руб.</h3>
            <Button variant='outline-dark'>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>

      <Row className='d-flex flex-column m-3'>
        <h1>Характеристики</h1>
        {description.map((info, index) => (
          <Row key={info.id} style={{ background: index % 2 === 0 ? "lightgray" : "transparent", padding: 10 }}>
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
