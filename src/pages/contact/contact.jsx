import React, { useRef, useState, useEffect } from "react";
import style from "./contact.module.css";
import Layout from "../../components/Layout/Layout";
import Container from "../../components/Container/Container";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Modal from "../../components/Modal/Modal";

const Contact = () => {
  const inputRef = useRef(null);

  const handleChange = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone,
    };

    axios
      .post("http://localhost:3001/api/sendData", formData)
      .then((response) => {
        console.log("Success:", response.data);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.title = "Nexus IT School - Contact page";
  });

  return (
    <Layout>
      <div className={style["contact_body"]}>
        <Container>
          <div className={style["contact_content"]}>
            <div className={style["contact_box"]}>
              <form className={style["contact_form"]} onSubmit={handleSubmit}>
                <h2 className={style["contact_h2"]}>{t("contact.title")}</h2>
                <p className={style["contact_p"]}>{t("contact.subtitle")}</p>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  ref={inputRef}
                  className={style["contact_input"]}
                  type="text"
                  placeholder={t("contact.name")}
                  maxLength={26}
                />
                <br />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  ref={inputRef}
                  className={style["contact_input"]}
                  type="number"
                  placeholder={t("contact.number")}
                  maxLength={16}
                />{" "}
                <br />
                <button
                  type="submit"
                  onClick={handleChange}
                  className={style["contact_btn"]}
                >
                  {t("contact.submit")}
                </button>{" "}
              </form>
              <br />
            </div>
            <div>
              <iframe
                title="uniqueTitleForIframe"
                className={style["contact_map"]}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.003597409745!2d69.20266457587329!3d41.287026171312846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba28509139f%3A0xc136ab2e7dfdd14a!2sMARS%20IT%20SCHOOL!5e0!3m2!1sru!2s!4v1723112385865!5m2!1sru!2s"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Layout>
  );
};

export default Contact;
