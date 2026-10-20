import React from "react";
import Image from "next/image";
import styles from "./home.module.scss";

const services = [
  {
    image: "/images/6bdc0025f8c0f52e069d158b1a306c20ce2f2eb1.jpg",
    title: "IPDC SAVING SCHEMES",
  },
  {
    image: "/images/0597accf113e42d34d81d30234d96d13f19e5490.jpg",
    title: "IPDC PERSONAL LOAN",
  },
  {
    image: "/images/e0584cb53ee9facce014176137505429dc15e1fa.jpg",
    title: "IPDC DEPOSIT SCHEMES",
  },
  {
    image: "/images/c1c9ec186c92d81b9bf94f4898cdfcdea529a5f8.jpg",
    title: "IPDC AUTO LOAN",
  },
];

export default function OurServices() {
  return (
    <section className={styles.ourServices} aria-label="Our Services">
      <h2 className={styles.ourServicesTitle}>Our Services</h2>
      <p className={styles.ourServicesDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis
        vel feugiat erat tortor eleifend.
      </p>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceImageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                width={280}
                height={350}
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.serviceInfo}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <span className={styles.serviceArrow}>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}