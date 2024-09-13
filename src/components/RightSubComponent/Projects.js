"use client";
import React from "react";
import styles2 from "../../css/about.module.css";
import styles3 from "../../css/skill.module.css";
import style from "../../css/project.module.css";

function Projects() {
  const web = [
    {
      title: "Food Truck",
      link: "https://internet-folks-task1.vercel.app/",
    },
    {
      title: "Live Form",
      link: "https://internet-folks-task2.vercel.app/",
    },
    {
      title: "Geobook",
      vid: "https://youtu.be/zbG2aasLwWA",
    },

    {
      title: "Timetable Generator",
      vid: "https://youtu.be/M8cJd6KYoQ8",
    },
    {
      title: "Employee Gamify",
      vid: "https://youtu.be/iYpQyg9UkHE",
    },
  ];

  const mobileApp = [
    {
      title: "Confession App",
      vid: "https://www.youtube.com/shorts/BjJmoYV-5Xw",
    },
    {
      title: "Restaurant Seat Booking",
      vid: "https://youtu.be/iff2OLgBqA4",
    },
    {
      title: "AgroVeda",
    },
  ];

  return (
    <div className={styles2.mainAbout}>
      <h1 className={styles2.aboutHead}>Innovation Station</h1>
      <hr
        style={{
          width: "90%",
          marginLeft: "5%",
          marginBottom: ".9rem",
          border: "none",
          height: "3px",
          color: "#333",
          backgroundColor: "#333",
        }}
      />
      <h3 className={styles3.subHead}>MERN Web Apps</h3>
      <div className={style.wProject}>
        {web.map((ele, index) =>
          ele.link ? (
            <div key={index}>
              <a
                style={{
                  all: "unset",
                }}
                href={ele.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={style.buttonV} role="button">
                  {ele?.title}
                </button>
              </a>
            </div>
          ) : (
            <div>
              <a
                style={{
                  all: "unset",
                }}
                href={`${ele?.vid}`}
                target="_blank"
              >
                <button className={style.buttonV} role="button">
                  {ele?.title}
                </button>
              </a>
            </div>
          )
        )}
      </div>
      <hr
        style={{
          width: "90%",
          marginLeft: "5%",
          marginBottom: ".9rem",
          border: "none",
          height: "3px",
          color: "#333",
          backgroundColor: "#333",
          marginTop: ".9rem",
        }}
      />
      <h3 className={styles3.subHead}>MERN Mobile Apps</h3>
      <div className={style.wProject}>
        {mobileApp.map((ele, index) => (
          <div key={index}>
            <a
              style={{
                all: "unset",
              }}
              href={`${ele?.vid}`}
              target="_blank"
            >
              <button className={style.buttonV} role="button">
                {ele.title}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
