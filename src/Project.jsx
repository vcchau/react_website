import React, { Component } from "react";

class Project extends Component {
  state = {};
  render() {
    const tools = this.props.tools.map(tool => <li>{tool}</li>);
    return (
      <div className="row">
        <hr style={{ border: "1px solid", width: "100%", color: "#e1e9f5" }} />

        <h2><a href={this.props.url}>{this.props.title}</a></h2>
        <a href={this.props.url}>{this.props.url}</a>
        <h2>{this.props.link}</h2>
        <div className="row">
          <div className="col-6">
            <img
              src={require(`./images/${this.props.image}`)}
              alt={this.props.alt}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto"
              }}
            />
          </div>
          <div className="col-6">
            <h3>Tools and technologies used:</h3>
            <ul>{tools}</ul>
          </div>
        </div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Project;
