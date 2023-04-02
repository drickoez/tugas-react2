import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dimas Ricko</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Biografi</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">Portfolio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
