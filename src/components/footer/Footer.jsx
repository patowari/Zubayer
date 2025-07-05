import React from "react";
import "./Footer.css";
import { FiFacebook, FiGithub, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <a href="#" className="footer_logo">
        Go To
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.facebook.com/md.zubayerhossainpatowari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/zpatowari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/patowari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="https://https://www.instagram.com/_md_zubayer_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.youtube.com/@zubayercodingclub1161"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiYoutube />
        </a>
        
      </div>
      
      <div className="footer_copyright">
        <small>&copy; Md Zubayer Hossain Patowari {currentYear}</small>
      </div>
    </footer>
  );
};

export default Footer;
