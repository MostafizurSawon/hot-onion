import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Home.css'

const HomeService = (props) => {
    const {name, icon, img, description} = props.service;
    return (
        <Col>
      <Card className="custom-card border-0 ">
      <Card.Img className="custom-img mx-auto p-3" variant="top" fluid src={img} />
      <Card.Body>
        <Card.Title>
        <img className="mx-3" src={icon} alt="" />{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    );
};

export default HomeService;