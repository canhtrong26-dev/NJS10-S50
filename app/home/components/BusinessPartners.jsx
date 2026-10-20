import React from "react";
import Image from "next/image";
import styles from "./home.module.scss";

const partners = [
  { name: "Westin", logo: "/icons/9ba41e367456fd050443e5f411d741796c6cfab6.png" },
  { name: "Summit", logo: "/icons/8a0b6b59672ecfa8067c4d91601da2aa93daee16.png" },
  { name: "Holcim", logo: "/icons/ce1151fb9ed0a6a4afc1270096cd49a5d8cb27ae.png" },
  { name: "ETV", logo: "/icons/84a2330e6dbcd47fbb058b6e9f4f47179cbf80a7.png" },
];

export default function BusinessPartners() {
  return (
    <section className={styles.businessPartners} aria-label="Business Partners">
      <div className={styles.partnersSection}>
        <h2 className={styles.partnersTitle}>BUSINESS PARTNERS</h2>
        <div className={styles.partnersLogos}>
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.logo}
              alt={partner.name}
              width={150}
              height={60}
              className={styles.partnerLogo}
            />
          ))}
        </div>
        <div className={styles.partnerIndicators}>
          <div className={styles.activeIndicator} />
          <div className={styles.indicator} />
          <div className={styles.indicator} />
          <div className={styles.indicator} />
        </div>
      </div>

      <div className={styles.glanceSection}>
        <div className={styles.glanceImage}>
          <Image
            src="/icons/3ca4befaf6e9b2b905d7f8e26c20873a29e90cf3.jpg"
            alt="IPDC at a glance"
            width={400}
            height={200}
            className={styles.glanceImg}
          />
        </div>
        <div className={styles.glanceContent}>
          <h2 className={styles.glanceTitle}>IPDC AT A GLANCE</h2>
          <p className={styles.glanceDescription}>
            IPDC Finance Limited (previously known as &quot;Industrial Promotion and
            Development Company of Bangladesh Limited&quot;) is the first private sector
            financial institution of the country established in 1981 by a distinguished
            group of shareholders namely International Finance Corporation (IFC), USA,
            German Investment and Development Company (DEG), Germany, The Aga Khan Fund
            for Economic Development (AKFED), Switzerland, Commonwealth Development
            Corporation (CDC), UK and the Government of Bangladesh.
          </p>
          <a href="#" className={styles.readMore}>Read More →</a>
        </div>
      </div>
    </section>
  );
}