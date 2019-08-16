import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

class MyNavbar extends Component {
  state = {};
  render() {
    const content = this.props.content.map(d => (
      <li className="nav-item">
        <Link
          activeClass="active"
          to={d}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {d}
        </Link>
      </li>
    ));
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <a className="nav-logo" alt="Logo" onClick={this.scrollToTop} />
          <ul className="nav-items">{content}</ul>
        </div>
        {content}
      </nav>
    );
  }
}

export default MyNavbar;
