import React, { Component } from "react";
import "./App.css";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";
import Project from "./Project.jsx";

const LINKEDIN_LINK = "https://www.linkedin.com/in/victorchau8";
const GITHUB_LINK = "https://github.com/vcchau";
const GITLAB_LINK = "https://gitlab.com/vcchau";
const RESUME_LINK =
  "https://drive.google.com/file/d/1CPj4reIhLphQCEIMEtJMRMi5ARtUhrOt/view";
const MAILING_ADDRESS = "mailto:vcchau@gmail.edu";

// const projects = [
//   {
//     title: "Parks Are Awesome",
//     image: "parksareawesomehome.png",
//     alt: "Parks Are Awesome home page",
//     tools: [
//       "Python",
//       "React",
//       "SQLAlchemy",
//       "Docker",
//       "Postman",
//       "Amazon Web Services"
//     ],
//     description:
//       "A complete web service designed to promote parks and encourage users to explore their natural beauty."
//   },
//   {
//     title: "Daily Weather",
//     image: "daily_weather_3.png",
//     alt: "Daily Weather home page",
//     tools: ["Java", "AccuWeather API", "Android Studio"],
//     description:
//       "Daily Weather is an app I created as a result of a past living situation. My past apartment room had no windows, so I decided a fun and helpful solution would be to create my very own weather app."
//   },
//   {
//     title: "Gun Sounds",
//     image: "gun_sounds_finger_gun.png",
//     alt: "Gun Sounds",
//     tools: ["Java", "Android Studio"],
//     description:
//       "Gun Sounds takes your favorite childhood gun sound emulator and combines it today's gyroscope sensors. You can choose from multiple guns (more to be added) and fire by either tapping the screen or tilting your phone up and down quickly as if firing a real gun. Please be careful when using this app in public as it may give off the wrong impression. "
//   },
//   {
//     title: "Tap Heroes",
//     image: "taphero.png",
//     alt: "Tap Heroes",
//     tools: ["Java", "Android Studio"],
//     description:
//       "Tap Hero was a fun game that I made while exploring Android Studio."
//   }
// ];

class App extends Component {
  render() {
    const projectList = projects.map(d => (
      <Project
        title={d.title}
        image={d.image}
        alt={d.alt}
        tools={d.tools}
        description={d.description}
      />
    ));
    return (
      // #e1e9f5
      <div style={{ backgroundColor: "white" }}>
        <div className="container">
          <Body
            linkedin_link={LINKEDIN_LINK}
            github_link={GITHUB_LINK}
            gitlab_link={GITLAB_LINK}
            resume_link={RESUME_LINK}
            mail_to_address={MAILING_ADDRESS}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
