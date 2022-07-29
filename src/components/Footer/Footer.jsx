import React from "react";
import styles from "./Footer.module.css";
import { SiDatabricks } from "react-icons/si";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FiMail, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className={styles.footer_sec}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.logo_footer}>
            <SiDatabricks className={styles.icon} />
            Secured.
          </div>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BsFillArrowUpCircleFill className="icon" />
          </Link>
        </div>
        <div className={styles.col_cont}>
          <div className={styles.col}>
            <h3>Navigation</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className={styles.col}>
            <h3>My Account</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className={styles.col}>
            <h3>Information</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className={styles.col}>
            <h3>Legal</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <form>
            <h3>Join Our Team</h3>
            <input type="email" placeholder="Enter your email" />
                      <FiMail className={ styles.mail_icon} />
          </form>
            <div className={ styles.social_group}>
                      <FiInstagram className={styles.social_icon} size={ 25} />
            <FiFacebook className={styles.social_icon} size={ 25} />
            <FiLinkedin className={styles.social_icon} size={ 25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
