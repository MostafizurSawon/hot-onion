import React, { useEffect, useState } from 'react';
import FoodMenu from './FoodMenu/FoodMenu';
import { Button, FormControl, InputGroup} from 'react-bootstrap';

const Home = () => {
    const [showServices, setShowServices] = useState([]);
   useEffect(()=>{
       fetch('./services')
       .then(res => res.json())
       .then(data => console.log(data))
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
        
            
        </>
    );
};

export default Home;