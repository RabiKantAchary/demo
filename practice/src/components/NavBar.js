import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Form } from 'react-bootstrap';
function NavBar(props) {
  
  return (
    <div>
      <Navbar bg={props.mode} data-bs-theme={props.mode}>
        <Container>
          <Navbar.Brand href="#home">TextUtils</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Contacts</Nav.Link>
          </Nav>
        </Container>
        <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.changemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.modename}`}  htmlFor="flexSwitchCheckDefault">{props.modename}</label>
        </div>
        
      </Navbar>
    </div>
  )
}

export default NavBar