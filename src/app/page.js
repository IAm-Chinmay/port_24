import React from "react";

import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
}
