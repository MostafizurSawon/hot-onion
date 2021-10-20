import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './BreakfastMenu.css';

const LunchMenu = (props) => {
    const {name, description, img, price} = props.breakfast;
    
    return (
      <Col>
      <Card className="custom-card border-0 ">
      <Card.Img className="custom-img mx-auto p-3" variant="top" fluid src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
         <b>$ {price}</b> 
        </Card.Text>
        <button className="custom-sign">Details</button>
      </Card.Body>
    </Card>
    </Col>
    );
};

export default LunchMenu;