import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "./components/menu";
import TopBar from "./components/topbar";
import Text from "./components/details"

function App() {
  return (
    <div className="App">
      <TopBar />
      <Container fluid="true">
            <Col className="side-col border-right bg-light" xs={2}>
              <div className="sticky-top sticky-top-cm">
                <Menu />
              </div>
            </Col>

            <Col className="center-col" xs={6}>
              <div className="sticky-top sticky-top-cm">
                <Text />
              </div>
            </Col>
        </Container>
    </div>
  );
}

export default App;
