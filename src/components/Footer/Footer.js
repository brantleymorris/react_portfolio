import React from "react";
import { Container, Row, Col } from "../Grid";

const Footer = () => {
    // for the links at the bottom I need to see if that should be an onClick tag instead
    // add linked in Icon and ref
    return(
        <Container>
            <Row>
                <Col size="md-4">
                    <a href="https://github.com/brantleymorris">
                        <img src="../../assets/images/GitHub-Mark-64px.png" alt="Github Link" />
                    </a>
                </Col>
                <Col size="md-4">
                    <p><strong>Phone:</strong> (512) 433-9503</p>
                    <p><strong>Email:</strong> brantleymorris@me.com</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;