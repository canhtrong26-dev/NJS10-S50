import React from "react";
import Image from "next/image";
import styles from "./home.module.scss";

const features = [
  {
    icon: "/icons/Circle Layer.png",
    title: "Integrity",
    description: "Displaying the highest level of Integrity in the way we conduct our business",
  },
  {
    icon: "/icons/Vector (1).png",
    title: "Demonstrate",
    description: "Demonstrating a strong Will to Win in the market place",
  },
  {
    icon: "/icons/Object Ungroup.png",
    title: "Diversity",
    description: "Promoting Diversity in the work place and community",
  },
  {
    icon: "/icons/Vector (2).png",
    title: "Teamwork",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id pen",
  },
  {
    icon: "/icons/Vector.png",
    title: "Collaboration",
    description: "Displaying the highest level of Integrity in the way we conduct our business",
  },
  {
    icon: "/icons/Vector (4).png",
    title: "Technology",
    description: "Harnessing the power of Technology to deliver better customer experience",
  },
  {
    icon: "/icons/Vector (5).png",
    title: "Corporate",
    description: "Setting the standard for the best Corporate Citizenship in the communities we work",
  },
  {
    icon: "/icons/Vector (6).png",
    title: "Digital",
    description: "Setting the standard for the best Corporate Citizenship in the communities we work",
  },
];

export default function CustomerExperience() {
  return (
    <section className={styles.customerExperience} aria-label="Customer Experience">
      <h2 className={styles.sectionTitle}>
        Creating Extraordinary Customer Experience
      </h2>
      <p className={styles.sectionDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi
        dignissim eu pharetra consequat montes, sagittis.
      </p>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <Image
              src={feature.icon}
              alt={feature.title}
              width={40}
              height={40}
              className={styles.featureIcon}
            />
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}