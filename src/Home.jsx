import React, { Component } from "react";
import image from "./images/victor.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row" style={{ paddingTop: "10px" }}>
          <div className="col-6">
            <img
              src={image}
              alt="Victor Chau"
              style={{
                objectFit: "cover",
                width: "100%"
              }}
            />
          </div>
          <div className="col-6">
            <h1 style={{ textAlign: "center" }}>Hi, I'm Victor.</h1>
            <p>
              This is my new website developed using React and React Router, and
              hosted using AWS S3 and Route53. You can find all the useful links
              like my resume and GitHub pages down in the footer below. If you'd
              like to see the previous version of my website, you can see it{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.prev_site_link}
              >
                here
              </a>
              .
            </p>
            <br />
            <h2 style={{ textAlign: "center" }}>A little about me.</h2>
            <p>
              I'm an upcoming Fall 2019 graduate from the University of Texas at
              Austin. I'll be graduating with a Bachelors of Science in Computer
              Science and am currently looking for a full-time Software Engineer
              position, preferably in the Austin area. You can download my
              resume{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.resume_link}
              >
                here
              </a>{" "}
              or by clicking on the document icon in the footer down below.
            </p>
            <p>
              In my spare time I love playing sports like tennis and volleyball,
              and spending quality time with my friends. I also enjoy playing
              video games every now and then. Recently, I've been really into
              Smash Ultimate on the Nintendo Switch, and my favorite characters
              to play are Captain Falcon and Roy.
            </p>
            <p>Thanks again for stopping by!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
