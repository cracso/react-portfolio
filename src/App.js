import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} /> 
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Projects" component={Projects} />
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
