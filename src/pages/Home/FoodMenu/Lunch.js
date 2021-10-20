import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import LunchMenu from './LunchMenu/LunchMenu';

const Launch = () => {
    const [lunches, setLunches] = useState([]);
    useEffect(() => {
        fetch('./lunch.json')
        .then(res=>res.json())
        .then(data=>setLunches(data))
    }, []);
    return (
            <Row xs={1} md={3} className="g-4 my-4">
            {
                lunches.map(lunch => <LunchMenu key={lunch.key} lunch={lunch}></LunchMenu>)
            }
            </Row>
    );
};

export default Launch;