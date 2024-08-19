import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import "./home.css";
import HeaderForm from "../../components/HeaderForm/HeaderForm";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import AOS from "aos";
import Box from "../../components/Box/Box";
import image1 from "../../assets/1-image.png";
import image2 from "../../assets/2-image.png";
import image3 from "../../assets/3-image.png";
import image4 from "../../assets/4-image.png";
import image5 from "../../assets/5-image.png";
import image6 from "../../assets/6-image.png";
import image7 from "../../assets/7-image.png";
import image8 from "../../assets/8-image.png";
import image9 from "../../assets/9-image.png";
import image10 from "../../assets/10-image.png";
import image11 from "../../assets/11-image.png";
import image12 from "../../assets/12-image.png";
import image13 from "../../assets/13-image.png";
import image14 from "../../assets/14-image.png";
import Marquee from "react-fast-marquee";
import Image20 from "../../assets/image20.webp";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 0,
      title: `${t("hero.card.title")}`,
      subtitle: `${t("hero.card.subtitle")}`,
      icon: <i class="fa-solid fa-circle-half-stroke"></i>,
    },
    {
      id: 1,
      title: `${t("hero.card.title2")}`,
      subtitle: `${t("hero.card.subtitle2")}`,
      icon: <i class="fa-regular fa-star"></i>,
    },
    {
      id: 2,
      title: `${t("hero.card.title3")}`,
      subtitle: `${t("hero.card.subtitle3")}`,
      icon: <i class="fa-solid fa-bolt-lightning"></i>,
    },
    {
      id: 3,
      title: `${t("hero.card.title4")}`,
      subtitle: `${t("hero.card.subtitle4")}`,
      icon: <i class="fa-solid fa-brain"></i>,
    },
    {
      id: 4,
      title: `${t("hero.card.title5")}`,
      subtitle: `${t("hero.card.subtitle5")}`,
      icon: <i class="fa-solid fa-spa"></i>,
    },
    {
      id: 5,
      title: `${t("hero.card.title6")}`,
      subtitle: `${t("hero.card.subtitle6")}`,
      icon: <i class="fa-solid fa-certificate"></i>,
    },
  ];

  const category = [
    {
      id: 0,
      name: `${t("category.programming")}`,
      image: <i class="fa-solid fa-code"></i>,
    },
    {
      id: 1,
      name: `${t("category.design")}`,
      image: <i class="fa-solid fa-palette"></i>,
    },
    {
      id: 2,
      name: `${t("category.lan")}`,
      image: <i class="fa-solid fa-language"></i>,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  const courses = [
    {
      id: 0,
      icon: <i class="fa-regular fa-file-code"></i>,
      name: `${t("course.title")}`,
      duration: "5 oy",
      category: "Dasturlash",
    },
    {
      id: 1,
      icon: <i class="fa-brands fa-react"></i>,
      name: `${t("course.react")}`,
      duration: "8 oy",
      category: "Dasturlash",
    },
    {
      id: 2,
      icon: <i class="fa-solid fa-pen-nib"></i>,
      name: `${t("course.grafik")}`,
      duration: "7 oy",
      category: "Design",
    },
    {
      id: 3,
      icon: <i class="fa-brands fa-python"></i>,
      name: `${t("course.python")}`,
      duration: "8 oy",
      category: "Dasturlash",
    },
    {
      id: 4,
      icon: <i class="fa-brands fa-node"></i>,
      name: `${t("course.node")}`,
      duration: "8 oy",
      category: "Dasturlash",
    },
    {
      id: 5,
      icon: <i class="fa-brands fa-dailymotion"></i>,
      name: `${t("course.motion")}`,
      duration: "6 oy",
      category: "Design",
    },
    {
      id: 6,
      icon: <i class="fa-solid fa-language"></i>,
      name: `${t("course.english")}`,
      duration: "1 yil",
      category: "Til",
    },
    {
      id: 7,
      icon: <i class="fa-solid fa-language"></i>,
      name: `${t("course.russian")}`,
      duration: "8 oy",
      category: "Til",
    },
  ];

  useEffect(() => {
    document.title = "Nexus IT School - Home page";
  });

  return (
    <div>
      <Layout>
        <header>
          <HeaderForm />
        </header>
        <main>
          <section className="hero">
            <Container>
              <h2>{t("hero.title")}</h2>
              <div className="hero__cards">
                {data.map((item) => {
                  return <Card key={item.id} data={item} />;
                })}
              </div>
            </Container>
          </section>
          <section className="category">
            <Container>
              <h2>{t("category.title")}</h2>
              <div className="category__cards">
                {category.map((item) => {
                  return (
                    <div key={item.id} className="category__card">
                      <div className="category__card__text">
                        <h3>{item.name}</h3>
                      </div>
                      <div className="category__card__image">{item.image}</div>
                      <div className="category__card--wrapper">
                        <div className="category__card--arrow">
                          <i class="fa-solid fa-arrow-up-long"></i>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
          <section className="courses">
            <Container>
              <h2>{t("courses.title")}</h2>
              <div className="courses__cards">
                {courses.map((item) => {
                  return <Box key={item.id} courses={item} />;
                })}
              </div>
            </Container>
          </section>
          <section className="partner">
            <Container>
              <h2 className="partner__title">{t("partner.title")}</h2>
            </Container>
            <Marquee direction="right" style={{ zIndex: "-1" }}>
              <div className="partner__content">
                <img src={image1} alt="image1" />
                <img src={image2} alt="image2" />
                <img src={image3} alt="image3" />
                <img src={image4} alt="image4" />
                <img src={image5} alt="image5" />
                <img src={image6} alt="image6" />
                <img src={image7} alt="image7" />
              </div>
            </Marquee>
            <Marquee style={{ zIndex: "-1" }}>
              <div className="partner__content">
                <img src={image8} alt="image8" />
                <img src={image9} alt="image9" />
                <img src={image10} alt="image10" />
                <img src={image11} alt="image11" />
                <img src={image12} alt="image12" />
                <img src={image13} alt="image13" />
                <img src={image14} alt="image14" />
              </div>
            </Marquee>
          </section>
          <section className="location">
            <Container>
              <h2 className="location__title">{t("location.title")}</h2>
              <div className="location__content">
                <div className="location__map">
                  <iframe
                    title="uniqueTitleForIframe"
                    className="location__content--map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.003597409745!2d69.20266457587329!3d41.287026171312846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba28509139f%3A0xc136ab2e7dfdd14a!2sMARS%20IT%20SCHOOL!5e0!3m2!1sru!2s!4v1723112385865!5m2!1sru!2s"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="location__form">
                  <h3>{t("location.subtitle")}</h3>
                  <img src={Image20} alt="" />
                  <h5>{t("location.text")}</h5>
                  <h5>
                    <span>{t("location.text2")}</span>
                    <br /> {t("location.text3")}
                  </h5>
                  <h5>
                    <span>{t("location.text4")}</span>
                    <br /> 09:00 - 18:00
                  </h5>
                  <h5>
                    <span>{t("location.text5")} </span>
                    <br /> +998 99 728 8675
                  </h5>
                </div>
              </div>
            </Container>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
