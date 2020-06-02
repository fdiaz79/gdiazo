import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'


const Navigation = () => {
    const hideDropDown = () => {
        document.getElementsByClassName('dropdown-menu')[0].classList.remove("show")
    }
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/">GDiazO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to='/' className="nav-link">INICIO</NavLink>
                    <NavDropdown title="GALLERIAS " id="collasible-nav-dropdown" >
                        <Link to={{ pathname: '/gallery', state: { galleryName: 'figura'}}} className="dropdown-item" onClick={hideDropDown}>Figura Humana</Link>
                        <Link to={{ pathname: '/gallery', state: { galleryName: 'abstracto'}}} className="dropdown-item" onClick={hideDropDown}>Abstracto</Link>
                        <Link to={{ pathname: '/gallery', state: { galleryName: 'paisajes'}}} className="dropdown-item" onClick={hideDropDown}>Paisajes</Link>
                        <Link to={{ pathname: '/gallery', state: { galleryName: 'costumbrismo'}}} className="dropdown-item" onClick={hideDropDown}>Costumbrismo</Link>
                    </NavDropdown>
                    <NavLink to='/about' className="nav-link">ACERCA DE</NavLink>
                    <NavLink to='/contact' className="nav-link">CONTACTO</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
