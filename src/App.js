import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./assets/css/style.css";
// switch this out for bootstrap, imported on index


function App() {

  // may add a contact page, with links to resume
  return (
    <Router>
      <Header/>

      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
