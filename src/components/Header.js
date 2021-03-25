import React from "react";

const Header = () => {
    return(
        <header>
            <h1>Brantley Morris</h1>
            <nav>
                <a id="aboutMeNav" href="#aboutMe">About Me</a>

                <a id="projectsNav" href="#projects">Projects</a>

                <a id="contactNav" href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;