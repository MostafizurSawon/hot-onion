import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DinnerMenu from './DinnerMenu/DinnerMenu';

const Dinner = () => {
    const [dinners, setDinners] = useState([]);
    useEffect(() => {
        fetch('./dinner.json')
        .then(res=>res.json())
        .then(data=>setDinners(data))
    }, []);
    return (
        <Row xs={1} md={3} className="g-4 my-4">
            {
                dinners.map(dinner => <DinnerMenu key={dinner.key} dinner={dinner}></DinnerMenu>)
            }
        </Row>
    );
};

export default Dinner;