import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li>
            <a href="#retail" className={styles.navLink}>
              Retail
            </a>
          </li>
          <li>
            <a href="#sme" className={styles.navLink}>
              SME
            </a>
          </li>
          <li>
            <a href="#corporate" className={styles.navLink}>
              Corporate
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navLink}>
              About Us
            </a>
          </li>
          <li>
            <a href="#covid" className={styles.navLink}>
              Covid 19
            </a>
          </li>
          <li>
            <a href="#campaigns" className={styles.navLink}>
              Campaigns
            </a>
          </li>
        </ul>
       <Image
            src="/icons/Magnifier.png"
            alt="Search"
            width={24}
            height={24}
            className={styles.userIcon}
        />
      </nav>
      <button className={styles.serviceButton}>iSERVICE</button>
    </header>
  );
}

export default Header;