import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BreakfastMenu from './BreakfastMenu/BreakfastMenu';

const Breakfast = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('./breakfast.json')
        .then(res=>res.json())
        .then(data=>setBreakfasts(data))
    }, []);
    return (
        <Row xs={1} md={3} className="g-4 my-4">
            {
                breakfasts.map(breakfast => <BreakfastMenu key={breakfast.key} breakfast={breakfast}></BreakfastMenu>)
            }
        </Row>
    );
};

export default Breakfast;