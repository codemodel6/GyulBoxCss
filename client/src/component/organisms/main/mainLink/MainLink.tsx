import React, { Component } from "react";
import styles from "../MainLink/MainLink.module.scss";

type Props = {};

export default function MainLink({}: Props) {
  return (
    <div className={styles.linkParts}>
      <div className={styles.linkDiv}>MainLink</div>
      <div className={styles.linkDiv}>MainLink</div>
      <div className={styles.linkDiv}>MainLink</div>
    </div>
  );
}
