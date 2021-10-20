import React from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logolight.png';
import './Header.css';

const Header = () => {
    // const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand>
                    <Nav.Link as={HashLink} to="/"> <img src={logo} alt="" /></Nav.Link>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/login"><span className="custom-login">Login</span> </Nav.Link>
                        <Nav.Link as={HashLink} to="/signup"><span className="custom-sign">Sign Up</span></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    );
};

export default Header;