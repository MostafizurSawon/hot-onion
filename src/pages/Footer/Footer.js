import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark container-fluid text-light">
            <Row className="d-flex justify-content-center align-items- pb-2 pt-5">
                <Col sm={6}>
                    <img className="w-25" src={img} alt="" />
                </Col>
                <Col sm={3}>
                    <h6>About Online Food</h6>
                    <h6>Read our blog</h6>
                    <h6>Sign up to deliver</h6>
                    <h6>Add your restuarent</h6>
                </Col>
                <Col sm={3}>
                    <h6>Get help</h6>
                    <h6>Read FAQs</h6>
                    <h6>View all cities</h6>
                    <h6>Restuarent around you</h6>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;