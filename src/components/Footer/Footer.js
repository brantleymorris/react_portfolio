import React from "react";
import { Container, Row, Col } from "../Grid";
import GitHub from "../../assets/images/GitHub-Mark-64px.png";
import LinkedIn from "../../assets/images/LI-In-Bug.png";

const Footer = () => {
    // for the links at the bottom I need to see if that should be an onClick tag instead
    // add linked in Icon and ref
    // used target={"_blacnk"} instead, less secure but works
    return(
        <Container>
            <Row>
                <Col size="md-4">
                    <a href="https://github.com/brantleymorris" target={"_blank"} rel="noreferrer">
                        <img src={GitHub} alt="Github Link" />
                    </a>
                </Col>
                <Col size="md-4">
                    <p><strong>Phone:</strong> (512) 433-9503</p>
                    <p><strong>Email:</strong> brantleymorris@me.com</p>
                </Col>
                <Col size="md-4">
                    <a href="https://www.linkedin.com/in/brantleymorris/" target={"_blank"} rel="noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" id="LinkedInLogo"/>
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;