import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a target="blank" href="mailto:godwine1100@gmail.com"  rel="noopener noreferrer">godwine1100@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/godwin-e/">https://www.linkedin.com/in/godwin-e/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Godw16">https://github.com/Godw16</a>
        </li>
      </ul>
    </footer>
  );
};
