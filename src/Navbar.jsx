import React, { Component } from "react";

class MyNavbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <a className="navbar-brand" href="/projects">
          Projects
        </a>
      </nav>
    );
  }
}

export default MyNavbar;
