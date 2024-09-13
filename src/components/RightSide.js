"use client"; // Ensure this file is treated as client-side only

import React, { useEffect, useRef } from "react";
import AbouMe from "./RightSubComponent/AbouMe";
import SkillAbout from "./RightSubComponent/SkillAbout";
import Projects from "./RightSubComponent/Projects";
import HireForm from "./RightSubComponent/HireForm";
import styles from "../css/rightside.module.css";

function RightSide() {
  const ref = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInVisible);
            observer.unobserve(entry.target); // Optionally unobserve once visible
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    ref.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      ref.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className={styles.rightSide}>
      <div
        ref={(el) => (ref.current[0] = el)}
        className={`${styles.fadeIn} ${styles.fadeInDelay1}`}
      >
        <AbouMe />
      </div>
      <div
        ref={(el) => (ref.current[1] = el)}
        className={`${styles.fadeIn} ${styles.fadeInDelay2}`}
      >
        <SkillAbout />
      </div>
      <div
        ref={(el) => (ref.current[2] = el)}
        className={`${styles.fadeIn} ${styles.fadeInDelay3}`}
      >
        <Projects />
      </div>
      <div
        ref={(el) => (ref.current[3] = el)}
        className={`${styles.fadeIn} ${styles.fadeInDelay4}`}
      >
        <HireForm />
      </div>
    </div>
  );
}

export default RightSide;
