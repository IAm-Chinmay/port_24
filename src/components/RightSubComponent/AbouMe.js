import React from "react";
import styles from "../../css/about.module.css";
function AbouMe() {
  return (
    <div className={styles.mainAbout}>
      <h1 className={styles.aboutHead}>Meet the Multi-Talented Marvel</h1>
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
      <p className={styles.para}>
        As an avid enthusiast of various activities beyond academics and
        professional endeavors, I find fulfillment and joy in pursuing diverse
        interests. Basketball serves as a cornerstone of my recreational
        pursuits, not only fostering physical fitness but also instilling values
        of teamwork, strategy, and perseverance.
      </p>
      <p className={styles.para}>
        In the digital realm, I immerse myself in the dynamic world of gaming,
        where strategic thinking, quick decision making, and adaptability are
        honed. Participating in hackathons fuels my passion for innovation and
        problem solving, offering collaborative environments to ideate and
        develop creative solutions to real-world challenges.
      </p>
      <p className={styles.para}>
        Moreover, my involvement in competitive coding competitions provides an
        exhilarating platform to showcase my technical acumen and algorithmic
        prowess. These experiences not only expand my skill set but also
        cultivate resilience, resourcefulness, and a drive for continuous
        improvement.
      </p>
    </div>
  );
}

export default AbouMe;
