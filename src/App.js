import React, { Component } from "react";
import "./App.css";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";

const LINKEDIN_LINK = "https://www.linkedin.com/in/victorchau8";
const GITHUB_LINK = "https://github.com/vcchau";
const GITLAB_LINK = "https://gitlab.com/vcchau";
const RESUME_LINK =
  "https://drive.google.com/file/d/1CPj4reIhLphQCEIMEtJMRMi5ARtUhrOt/view";
const MAILING_ADDRESS = "mailto:vcchau@gmail.edu";

class App extends Component {
  render() {
    return (
      // #e1e9f5
      <div style={{ backgroundColor: "white" }}>
        <div className="container">
          <Body resume_link={RESUME_LINK} />
          <Footer
            linkedin_link={LINKEDIN_LINK}
            github_link={GITHUB_LINK}
            gitlab_link={GITLAB_LINK}
            resume_link={RESUME_LINK}
            mail_to_address={MAILING_ADDRESS}
          />
        </div>
      </div>
    );
  }
}

export default App;
