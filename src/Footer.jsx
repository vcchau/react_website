import React, { Component } from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import Icons from "./icons.jsx";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <br />
        <div
          style={{
            textAlign: "center",
            borderTop: "1px solid black"
          }}
        >
          <br />
          <h5>© Victor Chau 2019</h5>
        </div>
      </footer>
    );
  }
}

export default Footer;
