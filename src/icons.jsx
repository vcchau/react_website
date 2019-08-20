import React, { Component } from "react";

class Icons extends Component {
  state = {};
  render() {
    return (
      <div style={this.props.style}>
        <a
          href={this.props.resume_link}
          target="_blank"
          rel="noopener noreferrer"
          title="Resume"
          styles={{
            color: "black",
            margin: "5px 10px",
            hovertextdecoration: "none"
          }}
          className="fa fa-file-text"
          alt="Resume"
        />
        <a
          href={this.props.linkedin_link}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          styles={{
            color: "black",
            margin: "5px 10px",
            hovertextdecoration: "none"
          }}
          className="fa fa-linkedin-square"
          alt="LinkedIn"
        />
        <a
          href={this.props.github_link}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          styles={{
            color: "black",
            margin: "5px 10px",
            hovertextdecoration: "none"
          }}
          className="fa fa-github"
          alt="GitHub"
        />
        <a
          href={this.props.gitlab_link}
          target="_blank"
          rel="noopener noreferrer"
          title="GitLab"
          styles={{
            color: "black",
            margin: "5px 10px",
            hovertextdecoration: "none"
          }}
          className="fa fa-gitlab"
          alt="GitLab"
        />
        <a
          href={this.props.mail_to_address}
          title="Email"
          styles={{
            color: "black",
            margin: "5px 10px",
            hovertextdecoration: "none"
          }}
          className="fa fa-envelope-o"
          alt="email"
        />
      </div>
    );
  }
}

export default Icons;
