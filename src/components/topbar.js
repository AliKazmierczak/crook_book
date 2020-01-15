import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form'
import Col from "react-bootstrap/Col";

class TopBar extends Component {
  image = {
    cPot: process.env.PUBLIC_URL + "/images/variables/Crock_Pot.gif"
  };
  styles = {
    image: {
      flex: 0.03
    }
  };
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Image
          src={this.image.cPot}
          style={this.styles.image}
          className="mr-2"
        />
        <Navbar.Brand href="#home" className="mr-4">
          Crock Pot Cook Book
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="mr-1">
          Game version:
        </Navbar.Brand>
        <Form inline className="mr-auto">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Control as="select">
              <option>Don't Starve Together</option>
              <option>Don't Starve</option>
              <option>Reign of Gigants</option>
              <option>Shipwreck</option>
              <option>Hamlet</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Nav>
          <Nav.Link href="#deets">Contact me</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            My GitHub projects
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default TopBar;
