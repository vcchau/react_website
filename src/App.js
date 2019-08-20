import React, { Component } from "react";

// Components
import "./App.css";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import MyNavbar from "./Navbar.jsx";

// React-Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Icon links
const PREV_SITE_LINK =
  "http://victorchau.me.s3-website-us-east-1.amazonaws.com/";
const LINKEDIN_LINK = "https://www.linkedin.com/in/victorchau8";
const GITHUB_LINK = "https://github.com/vcchau";
const GITLAB_LINK = "https://gitlab.com/vcchau";
const RESUME_LINK =
  "https://drive.google.com/file/d/1CPj4reIhLphQCEIMEtJMRMi5ARtUhrOt/view";
const MAILING_ADDRESS = "mailto:vcchau@gmail.edu";

class App extends Component {
  render() {
    /**
     * We use render={() => <Component/>} so that we can pass props down to the child components that we render.
     * This isn't supported if we specify component={Component} like we do with the Projects component.
     */
    return (
      // #e1e9f5
      <div style={{ backgroundColor: "white" }}>
        <div className="container">
          <MyNavbar />
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <Home
                    prev_site_link={PREV_SITE_LINK}
                    linkedin_link={LINKEDIN_LINK}
                    github_link={GITHUB_LINK}
                    gitlab_link={GITLAB_LINK}
                    resume_link={RESUME_LINK}
                    mail_to_address={MAILING_ADDRESS}
                  />
                )}
              />
              <Route path="/projects" exact component={Projects} />
            </Switch>
          </Router>
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
