import React from 'react';
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import Dinner from './Dinner';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import './food.css';

const FoodMenu = () => {
    
    return (
        <div className="container mx-auto mb-5 py-5">
        <Tab.Container defaultActiveKey="second">
        <Row>
            <Col className="d-flex justify-content-center">
            <Nav variant="tabs" className="flex">
                <Nav.Item>
                <Nav.Link eventKey="first">Breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Launch</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                <Nav.Link eventKey="third">Dinner</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={12}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                <Breakfast />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    
                <Lunch />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Dinner />
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>

        







            {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className=" mb-3">
            <Tab eventKey="Breakfast" title="Breakfast">
                <Breakfast />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Launch></Launch>
            </Tab>
            <Tab eventKey="contact" title="Contact" >
                <Dinner></Dinner>
            </Tab>
            </Tabs> */}
        </div>
    );
};

export default FoodMenu;


