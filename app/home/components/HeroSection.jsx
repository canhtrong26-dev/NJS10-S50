import React from "react";
import Image from "next/image";
import styles from "./home.module.scss";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <Image
          src="/images/022c1b07ca1505deb37d99f8e891313a766d8db6.png"
          alt="Company logo"
          width={109}
          height={40}
          className={styles.logo}
        />

        <h1 className={styles.heroTitle}>
          Chase Your <br /> Dream with us
        </h1>

        <p className={styles.heroDescription}>
          The harder you work for something, the greater you will feel when you
          achieve it.
        </p>

        <div className={styles.ctaButtons}>
          <button className={styles.primaryButton}>Apply Online</button>
          <button className={styles.secondaryButton}>Loan Calculator</button>
        </div>

        <div className={styles.socialProof}>
          <div className={styles.userCount}>
            <Image
              src="/icons/call.png"
              alt="User icon"
              width={24}
              height={24}
              className={styles.userIcon}
            />
            <span className={styles.count}>16519</span>
          </div>
          <div className={styles.socialIcons}>
            <Image src="/images/Vector.png" alt="Facebook" width={24} height={24} className={styles.socialIcon} />
            <Image src="/images/Vector (1).png" alt="YouTube" width={24} height={24} className={styles.socialIcon} />
            <Image src="/images/Vector (2).png" alt="LinkedIn" width={24} height={24} className={styles.socialIcon} />
            <Image src="/images/Vector (3).png" alt="Instagram" width={24} height={24} className={styles.socialIcon} />
          </div>
        </div>
      </div>

      <div className={styles.heroImage}>
        <Image
          src="/images/e1b5ff14e9aedf1e8d2461703846da16ad93c573.png"
          alt="Hero background"
          width={600}
          height={500}
          className={styles.backgroundImage}
          
        />
        <div className={styles.loanTypes}>
          <div className={styles.loanType}>
            <Image src="/icons/Vector.png" alt="Car icon" width={31} height={31} className={styles.loanIcon} />
            <span className={styles.loanText}>Car Loans</span>
          </div>
          <div className={styles.loanType}>
            <Image src="/icons/home-icon.png" alt="Home icon" width={31} height={31} className={styles.loanIcon} />
            <span className={styles.loanText}>Home Loan</span>
          </div>
        </div>
        <div className={styles.indicators}>
          <div className={styles.activeIndicator} />
          <div className={styles.indicator} />
          <div className={styles.indicator} />
          <div className={styles.indicator} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;