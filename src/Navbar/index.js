import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <div class="topnav">
  <a class="active" href="/">Home</a>
  <a href="Portfolio">Portfolio</a>
  <a href="Projects">Projects</a>
  <a href="Contact">Contact</a>
</div>
    );
}

export default Navbar;
