import React from "react";
import Image from "next/image";
import styles from "../css/leftside.module.css";
import styles2 from "../css/skill.module.css";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function LeftSide() {
  return (
    <div className={styles.leftSide}>
      <Image
        src={require("../../public/assests/port.png")}
        className={styles.image}
        alt="carousel"
        priority
        quality={100}
      />
      <div>
        <h1 className={styles.head}>
          Hi, I'm{" "}
          <span
            style={{
              color: "#e32424",
              fontWeight: 800,
            }}
          >
            Chinmay Mulay
          </span>{" "}
          <br /> Software Engineer.
        </h1>
      </div>
      <div>
        <p className={styles.para}>
          I’m a passionate Software Developer who combines creativity with
          technical know-how. My journey so far has been shaped by hands-on
          internships, where I’ve honed my skills and learned the importance of
          clear communication within a team. I’m excited to continue exploring
          the world of entrepreneurship and business, and I’m eager to bring my
          enthusiasm and expertise to a new role as a Software Developer.
        </p>
      </div>
      <div className={styles.dSocial}>
        <button className={styles.button}>
          <a
            style={{
              all: "unset",
            }}
            download
            href="/assests/resume.pdf"
          >
            DOWNLOAD MY CV
          </a>
        </button>
        <div className={styles.social}>
          <a
            style={{
              all: "unset",
            }}
            href="https://github.com/IAm-Chinmay"
            target="_blank"
          >
            <div className={styles2.icons}>
              <FaGithub />
            </div>
          </a>
          <a
            style={{
              all: "unset",
            }}
            href="https://www.linkedin.com/in/iam-chinmay/"
            target="_blank"
          >
            <div className={styles2.icons}>
              <FaLinkedin />
            </div>
          </a>
          <a
            style={{
              all: "unset",
            }}
            href="https://www.instagram.com/chin.may_be/"
            target="_blank"
          >
            <div className={styles2.icons}>
              <FaInstagram />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
