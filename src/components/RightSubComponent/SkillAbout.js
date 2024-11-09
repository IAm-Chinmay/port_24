import React from "react";
import styles2 from "../../css/about.module.css";
import styles from "../../css/skill.module.css";

import {
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaNodeJs,
  FaApple,
  FaJava,
  FaUnity,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpo,
  SiUnrealengine,
  SiNetlify,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { TbBrandCpp, TbSql, TbBrandReactNative } from "react-icons/tb";
import { FcAndroidOs } from "react-icons/fc";

function SkillAbout() {
  const webdev = [
    {
      logo: <FaReact color="#61DBFB" title="ReactJS" cursor={"pointer"} />,
    },
    {
      logo: <SiNextdotjs color="black" title="NextJS" cursor={"pointer"} />,
    },
    {
      logo: (
        <FaBootstrap color="#e040fb" title="Bootstrap" cursor={"pointer"} />
      ),
    },
    {
      logo: (
        <RiTailwindCssFill
          color="#4c1d95"
          title="Tailwind"
          cursor={"pointer"}
        />
      ),
    },
    {
      logo: <FaHtml5 color="#F06529" title="HTML" cursor={"pointer"} />,
    },
    {
      logo: <FaCss3 color="#264de4" title="CSS" cursor={"pointer"} />,
    },
    {
      logo: <FaJs color="yellow" title="Javascript" cursor={"pointer"} />,
    },
    {
      logo: <SiTypescript color="blue" title="Typescript" cursor={"pointer"} />,
    },
    {
      logo: <FaPython title="Python" cursor={"pointer"} />,
    },
    {
      logo: (
        <IoLogoFirebase color="#Firebase" title="ReactJs" cursor={"pointer"} />
      ),
    },
    {
      logo: <IoLogoVercel color="black" title="Vercel" cursor={"pointer"} />,
    },
    {
      logo: <SiNetlify color="#32E6E2" title="Vercel" cursor={"pointer"} />,
    },
    {
      logo: <SiMongodb color="green" title="MongoDB" cursor={"pointer"} />,
    },
    {
      logo: <TbSql title="SQL" cursor={"pointer"} />,
    },
    {
      logo: <FaNodeJs color="green" title="NodeJS" cursor={"pointer"} />,
    },
  ];

  const appDev = [
    {
      logo: (
        <TbBrandReactNative
          color="#61DBFB"
          title="React Native"
          cursor={"pointer"}
        />
      ),
    },
    {
      logo: <SiExpo color="white" title="EXPO" cursor={"pointer"} />,
    },
    {
      logo: <FcAndroidOs title="Android" cursor={"pointer"} />,
    },
    {
      logo: <FaApple color="black" title="IOS" cursor={"pointer"} />,
    },
  ];

  const other = [
    {
      logo: <TbBrandCpp color="#61DBFB" title="C++" cursor={"pointer"} />,
    },
    {
      logo: <FaJava title="JAVA" cursor={"pointer"} />,
    },
    {
      logo: <FaUnity title="Unity Engine" cursor={"pointer"} />,
    },
    {
      logo: <SiUnrealengine title="Unreal Engine" cursor={"pointer"} />,
    },
    {
      logo: <FaGithub title="Github" cursor={"pointer"} />,
    },
    {
      logo: (
        <FaNpm title="Node Package Manager" cursor={"pointer"} color="red" />
      ),
    },
  ];
  return (
    <div className={styles2.mainAbout}>
      <h1 className={styles.aboutMySkill}>My Bag of Tricks</h1>
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
      <h3 className={styles.subHead}>Web Development </h3>
      <div className={styles.wSkills}>
        {webdev.map((ele) => (
          <div className={styles.icons}>{ele.logo}</div>
        ))}
      </div>
      <hr
        style={{
          width: "90%",
          marginTop: ".9rem",
          marginLeft: "5%",
          marginBottom: ".9rem",
          border: "none",
          height: "3px",
          color: "#333",
          backgroundColor: "#333",
        }}
      />
      <h3
        className={styles.subHead}
        style={{
          marginTop: "1rem",
        }}
      >
        Mobile Application Development
      </h3>
      <div className={styles.wSkills}>
        {appDev.map((ele) => (
          <div className={styles.icons}>{ele.logo}</div>
        ))}
      </div>
      <hr
        style={{
          width: "90%",
          marginTop: ".9rem",
          marginLeft: "5%",
          marginBottom: ".9rem",
          border: "none",
          height: "3px",
          color: "#333",
          backgroundColor: "#333",
        }}
      />
      <h3
        className={styles.subHead}
        style={{
          marginTop: "1rem",
        }}
      >
        Other
      </h3>
      <div className={styles.wSkills}>
        {other.map((ele) => (
          <div className={styles.icons}>{ele.logo}</div>
        ))}
      </div>
    </div>
  );
}

export default SkillAbout;
