import React, { useState } from 'react';
import "./headerForm.css";
import Container from "../Container/Container";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import Modal from '../Modal/Modal';

const HeaderForm = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone
    };

    axios.post('http://localhost:3001/api/sendData', formData)
      .then(response => {
        console.log('Success:', response.data);
        setIsModalOpen(true);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header">
      <Container>
        <div className="header__content">
          <div className="header__content--wrapper">
            <h1 className="header__content--wrapper-title">
              {t("header.title")}
            </h1>
            <button className="header__content--wrapper-button">
              +998 99 728 86 75
            </button>
          </div>
          <div className="header__content--wrapper">
            <form onSubmit={handleSubmit}>
              <h4>{t("schedule_text")}</h4>
              <input value={name} onChange={(e) => setName(e.target.value)} required type="text" placeholder={t("input_name")} />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} required type="number" placeholder={t("input_number")} />
              <button type="submit" className="header__content--wrapper-btn">
                {t("sign_up")}
              </button>
            </form>
          </div>
        </div>
      </Container>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HeaderForm;
