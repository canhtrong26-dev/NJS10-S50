import Image from "next/image";
import styles from "./home.module.scss";

const footerData = [
  {
    title: "Products",
    links: ["CSR Activities", "Green Banking", "News", "Ongoing Campaign", "Updates"],
  },
  {
    title: "Get Started",
    links: ["Career", "Contact Us", "Government Securities", "Examples", "NIS"],
  },
  {
    title: "About",
    links: ["IPDC at a Glance", "Mission, Vision & Values", "Corporate Governance", "Shareholders", "Investor Relations"],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.footerContent}>
        <div className={styles.footerAbout}>
          <h3 className={styles.footerTitle}>About the company</h3>
          <p className={styles.footerDescription}>
            Learn To Love Growth And Change And You Will Be A Success. Microsoft Patch
          </p>
          <div className={styles.footerSocials}>
            <Image src="/icons/Vector.png" alt="Facebook" width={24} height={24} />
            <Image src="/icons/Vector (1).png" alt="YouTube" width={24} height={24} />
            <Image src="/icons/Vector (2).png" alt="LinkedIn" width={24} height={24} />
            <Image src="/icons/Vector (3).png" alt="Instagram" width={24} height={24} />
          </div>
        </div>

        {footerData.map((column, index) => (
          <div key={index} className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{column.title}</h3>
            <ul className={styles.footerLinks}>
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className={styles.footerLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.footerPhone}>
          <Image src="/icons/call.png" alt="Phone" width={20} height={20} />
          <span className={styles.phoneNumber}>16519</span>
        </div>
      </div>
    </footer>
  );
}