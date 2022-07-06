import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/previouslyon.png";
import projImg2 from "../assets/img/snapchat.png";
import projImg3 from "../assets/img/munchies.png";
import projImg4 from "../assets/img/django.png";
import projImg5 from "../assets/img/puissance4.png";
import projImg6 from "../assets/img/carlab.png";
import projImg7 from "../assets/img/cryptozombie.jpg";
import projImg8 from "../assets/img/opensea.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';

export const Projects = () => {

  const projectsEcole = [
    {
      title: "PreviouslyOn",
      description: "WebApp Calendrier de série à partir d'une API. Stack utilisé : Next.js & Node.js ",
      imgUrl: projImg1,
    },
    {
      title: "MySnapChat",
      description: "Application mobile reprenant les fonctionnalités de Snapchat. Stack utilisé : React Native & Node.js ",
      imgUrl: projImg2,
    },
    {
      title: "Munchies",
      description: "Site E-commerce : pouvoir consulter les produits, acheter via Paypal sans se connecter, s'inscrire... Stack utilisé : Symfony / React.js",
      imgUrl: projImg3,
    },
    {
      title: "MyDrivingSchool",
      description: "Intranet pour une auto-école : pouvoir consulter les cours, les élèves, les moniteurs. Stack utilisé : Python / Django",
      imgUrl: projImg4,
    },
    {
      title: "Puissance 4",
      description: "Jeu reprenant les règles du puissance 4. Stack utilisé : HTML / CSS / JavaScript / JQuery",
      imgUrl: projImg5,
    },
  ];

  const projectsPerso = [
    {
      title: "Carlab",
      description: "Web App permettant de mettre en relation les commerciaux et les particuliers souhaitant vendre leurs véhicules. Stack utilisé : HTML / CSS / PHP / LARAVEL",
      imgUrl: projImg6,
    },
    {
      title: "CryptoZombies",
      description: "Initiation au Web3 et à la Blockchain. Stack utilisé : JavaScript, Solidity",
      imgUrl: projImg7,
    },
    {
      title: "OpenSeaClone",
      description: "MarketPlace NFTs. Stack utilisé : Next.js, Sanity.io",
      imgUrl: projImg8,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Voici tous les projets sur lesquelles j'ai pu travailler jusqu'à aujourd'hui.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projets d'école</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projets personnels</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projets en cours</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsEcole.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsPerso.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Actuellement je n'ai aucun projets personnels en cours...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
