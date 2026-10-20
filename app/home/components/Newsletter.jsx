'use client';

import { useState } from "react";
import xss from "xss";
import styles from "./home.module.scss";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanEmail = xss(email.trim());

    if (!cleanEmail) {
      setMessage("Vui lòng nhập email!");
      return;
    }

    if (!validateEmail(cleanEmail)) {
      setMessage("Email không hợp lệ!");
      return;
    }

    setMessage("Đăng ký thành công!");
    setEmail("");
  };

  return (
    <section className={styles.newsletter} aria-label="Newsletter">
      <h2 className={styles.newsletterTitle}>Newsletter</h2>
      <p className={styles.newsletterDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Eget ac quis aliquam arcu lacus.
      </p>
      <form onSubmit={handleSubmit} className={styles.newsletterForm}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.newsletterInput}
          maxLength={100}
        />
        <button type="submit" className={styles.newsletterButton}>
          SUBSCRIBE
        </button>
      </form>
      {message && <p className={styles.formMessage}>{message}</p>}
    </section>
  );
}