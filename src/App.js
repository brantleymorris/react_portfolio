import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./style.css";

function App() {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
