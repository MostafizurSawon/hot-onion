import React, { useEffect, useState } from 'react';
import FoodMenu from './FoodMenu/FoodMenu';
import { Button, FormControl, InputGroup, Row} from 'react-bootstrap';
import HomeService from './HomeService';
import './Home.css';

const Home = () => {
    const [showServices, setShowServices] = useState([]);
   useEffect(()=>{
       fetch('https://raw.githubusercontent.com/MostafizurSawon/hot-onion/main/public/services.json')
       .then(res => res.json())
       .then(data => setShowServices(data))
   },[])
    return (
        <>
        <div className="header  d-flex justify-content-center align-items-center">
            <div className="">
                <div><h1>Best Food waiting for your belly.</h1></div>
                
                <div className="mt-3 custom-form mx-auto pb-3">
                <InputGroup >
                        <FormControl className="custom-input"
                        placeholder="Search food items"
                        />
                        <Button className="custom-sign" variant="outline-secondary" >
                        Search
                        </Button>
                </InputGroup>
                </div>
                </div>
        </div>
        <FoodMenu></FoodMenu>
        
        <div className="container-fluid">
            <h2 className="service-font">Why Chose us?</h2>
            <h6 className="service-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Rem eveniet molestias vel dicta distinctio. </h6>
        <Row xs={1} md={3} className="g-4 my-3">
            {
                showServices.map(service => <HomeService key={service.key} service={service}></HomeService>)
            }
        </Row>
        </div>
        </>
    );
};

export default Home;