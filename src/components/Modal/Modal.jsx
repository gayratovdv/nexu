import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import './modal.css';

const Modal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev <= 0) {
            clearInterval(progressInterval);
            return 0;
          }
          return prev - (100 / 5); 
        });
      }, 2000);

      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-progress" style={{ width: `${progress}%` }}></div>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{t('modal.title')}</h2>
        <p>{t('modal.subtitle')}</p>
      </div>
    </div>
  );
};

export default Modal;
