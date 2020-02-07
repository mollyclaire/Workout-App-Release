import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { BrowserRouter as Router, Link } from "react-router-dom";

const button={
    margin: 10,
    color: "white",
    fontSize: 30
}

const title={
    color: "white",
    textAlign: "center",
    padding: "60px 40px 30px 40px",
}

class Home extends Component {

  render() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                        <h1 style={title}>You Can Do This.</h1>
                </Col>
            </Row>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", paddingTop: 440}}>
                <Col size="sm-6">
                    <Link to="/add" style={button}><i class="plus icon"></i></Link>
                </Col>
                <Col size="sm-6">
                    <Link to="/exercise" style={button}><i class="play icon"></i></Link>
                </Col>
            </div>
        </Container>
    )
  }
}

export default Home;
