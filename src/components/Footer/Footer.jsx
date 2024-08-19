import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer__content">
          <div className="footer__content--left">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <div className="footer__content--left-wrapper">
              <ul className="footer__content--left-list">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <p>&#169; "Nexus", 2024 - Barcha huquqlar himoyalangan</p>
            </div>
          </div>
          <div className="footer__content--right">
            <div className="footer__content--right-icons">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-telegram"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
            <div className="footer__content--right-wrapper">
              <p>
                <span>Call-markaz </span>+998 99 728 8675
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
