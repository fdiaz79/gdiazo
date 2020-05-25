import React from 'react'
import { Navbar, Nav, NavDropdown }from 'react-bootstrap';


const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">GDiazO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">INICIO</Nav.Link>
                    <NavDropdown title="GALLERIAS" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#!">Figura Humana</NavDropdown.Item>
                        <NavDropdown.Item href="#!">Abstracto</NavDropdown.Item>
                        <NavDropdown.Item href="#!">Paisajismo</NavDropdown.Item>
                        <NavDropdown.Item href="#!">Costumbrismo</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">ACERCA DE</Nav.Link>
                    <Nav.Link href="#home">CONTACTO</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
