import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../Container/Container";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__content">
          <div className="navbar__content--left">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar__content--center">
            <ul className="navbar__content--center-list">
              <li>
                <Link
                  to="/"
                  className={activeTab === "/" ? "nav-link active" : "nav-link"}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={
                    activeTab === "/blog" ? "nav-link active" : "nav-link"
                  }
                >
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={
                    activeTab === "/contact" ? "nav-link active" : "nav-link"
                  }
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link>
                {t("")}
                </Link>
              </li>
              <div class="animation start-home"></div>
            </ul>
          </div>
          <div className="navbar__content--right">
            <div className="select-container">
              <select
                className="language-select"
                onChange={handleLanguageChange}
                value={i18n.language}
              >
                <option value="en">English</option>
                <option value="uz">O'zbek</option>
                <option value="ru">Russian</option>
              </select>
              <div className="icon-container">
                <i className="fa-solid fa-caret-down"></i>
              </div>
            </div>
            <button className="navbar__content--right-btn">
              +998 99 728 86 75
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
