import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
  state = {
    projects: [
      {
        title: "Reel Time",
        link: "https://github.com/vcchau/reel-time",
        image: "reel_time.png",
        alt: "Reel time home page",
        tools: [
          "Python",
          "Flask",
          "MySQL",
          "Azure Kubernetes Service",
          "Azure Pipelines",
          "Amazon RDS for MySQL"
        ],
        description:
          "A Kubernetes web app that allows users to view and update real time information about different fish populations."
      },
      {
        title: "Parks Are Awesome",
        link: "https://gitlab.com/asikerd/parksareaweso.me",
        image: "parksareawesomehome.png",
        alt: "Parks Are Awesome home page",
        tools: [
          "Python",
          "React",
          "SQLAlchemy",
          "Docker",
          "Postman",
          "Amazon EC2",
          "Amazon RDS for MySQL"
        ],
        description:
          "A complete web service designed to promote parks and encourage users to explore their natural beauty."
      },
      {
        title: "Daily Weather",
        link: "https://github.com/vcchau/Daily_Weather",
        image: "daily_weather_3.png",
        alt: "Daily Weather home page",
        tools: ["Java", "AccuWeather API", "Android Studio"],
        description:
          "Daily Weather is an app I created as a result of a past living situation. My past apartment room had no windows, so I decided a fun and helpful solution would be to create my very own weather app."
      },
      {
        title: "Gun Sounds",
        link: "https://github.com/vcchau/Gun-Sounds",
        image: "gun_sounds_finger_gun.png",
        alt: "Gun Sounds",
        tools: ["Java", "Android Studio"],
        description:
          "Gun Sounds takes your favorite childhood gun sound emulator and combines it today's gyroscope sensors. You can choose from multiple guns (more to be added) and fire by either tapping the screen or tilting your phone up and down quickly as if firing a real gun. Please be careful when using this app in public as it may give off the wrong impression. "
      },
      {
        title: "Tap Heroes",
        link: "https://github.com/vcchau/Tap-Heroes",
        image: "taphero.png",
        alt: "Tap Heroes",
        tools: ["Java", "Android Studio"],
        description:
          "Tap Hero was a fun game that I made while exploring Android Studio."
      }
    ]
  };

  render() {
    return (
      <div className="col-12">
        {this.state.projects.map(d => (
          <Project
            title={d.title}
            link={d.link}
            image={d.image}
            alt={d.alt}
            tools={d.tools}
            description={d.description}
          />
        ))}
      </div>
    );
  }
}

export default Projects;
