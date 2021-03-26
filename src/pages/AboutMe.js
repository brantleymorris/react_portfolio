import React from "react";
import Me from "../assets/images/meAndClaire.jpeg";

const AboutMe = () => {
    return(
        <div id="aboutMe">
            <h2>On a quest for why</h2>
        
            <img src={Me} alt="Me and Claire" id="meAndClaire" />

            <p>I have always been interested in how things work. Which lead me to my first love, Biology. Learning how living things function of the macro and micro scale was truely fasinating. The levels of organization and sturcutre present at all levels of the world around us is simply beautiful.</p>

            <p>This love of structural systems is what first attracted me to programming. Learning about different programming languages and data sturctures have added a whole new level to my love of learning. Being part of an ever evolving industry means that I will be able to keep learning and exploring new ideas.</p>
        </div>
    );
};

export default AboutMe;