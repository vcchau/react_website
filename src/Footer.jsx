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
        <div style={{ textAlign: "center" }}>
          <Icons
            style={{
              fontSize: "50px",
              borderTop: "1px solid black"
            }}
            linkedin_link={this.props.linkedin_link}
            github_link={this.props.github_link}
            gitlab_link={this.props.gitlab_link}
            resume_link={this.props.resume_link}
            mail_to_address={this.props.mail_to_address}
          />
          <h5>© Victor Chau 2019</h5>
        </div>
      </footer>
    );
  }
}

export default Footer;
