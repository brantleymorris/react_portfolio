import React from "react";
import { Container, Row, Col } from "../Grid";

// commented text is from my old profile
// converted to use components for structure
const Header = () => {
    return(
        // <header>
        //     <h1>Brantley Morris</h1>
        //     <nav>
        //         <a id="aboutMeNav" href="/">About Me</a>

        //         <a id="projectsNav" href="/projects">Projects</a>

        //         <a id="contactNav" href="/contact">Contact</a>
        //     </nav>
        // </header>
        <div id="header">
        <Container>
            <Row>
                <Col size="md-6">
                    <h1>Brantley Morris</h1>
                </Col>
                <Col size="md-2">
                    <a href={"/"}>About Me</a>
                </Col>
                <Col size="md-2">
                    <a href={"/projects"}>Projects</a>
                </Col>
                <Col size="md-2">
                    <a href={"/contact"}>Contact</a>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Header;