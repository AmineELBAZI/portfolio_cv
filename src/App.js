// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

import ProfileImage from "./Components/ProfileImage";
import { Card } from 'primereact/card';
import { Analytics } from '@vercel/analytics/react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import Expériences from "./Components/Expériences";
import Formations from "./Components/Formations";
import Certificats from "./Components/Certificats";
import Projets from "./Components/Projets";

function App() {
  return (
    <BrowserRouter>
      <div>
       
        <header className="header">
         
          <h1>Mohamed Amine Elbazi  Elève </h1>
          <h2>En quatriéme année ingénierie informatique et réseaux </h2>
          <h2>Ecole Marocaine des Sciences de l’Ingénieur (EMSI Marrakech) </h2>
          <ProfileImage />
         
        </header>

        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formations" className="nav-link">
                Formations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/certificats" className="nav-link">
                Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/expériences" className="nav-link">
                Expériences
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/projets" className="nav-link">
                Projets
              </Link>
            </li>
            

          </ul>

        </nav>

        
        <div className="container mt-4">
          <Routes>
              <Route exact path="/" element={<Accueil />} />
              <Route path="/formations" element={<Formations />} />
              <Route path="/certificats" element={<Certificats />} />
              <Route path="/expériences" element={<Expériences />} />
              <Route path="/projets" element={<Projets />} />
             
          </Routes>
        </div>

        
        <footer className="footer">
          <p>eamine63@gmail.com</p>
        </footer>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

// Composant Accueil
function Accueil() {
  return (
    <section className="section">
      <Card title="Mohamed Amine Elbazi">
        <p className="m-0" style={{ textAlign: 'justify' }}>
        Je suis heureux de vous présenter vos compétences et intérêts professionnels. En ce qui concerne les compétences linguistiques, vous êtes à l'aise en arabe (votre langue maternelle), bilingue en français et courant en anglais. Au niveau technique, vous avez une expérience en installation et configuration d'équipements (ordinateurs, routeurs, commutateurs, imprimantes) sur le réseau. En mathématiques, vous avez une bonne compréhension de la programmation linéaire, du calcul vectoriel et de l'optimisation. Vous êtes également compétent en statistiques, y compris la description des données, les tests d'hypothèses, ANOVA et la régression linéaire.

En termes de langages de programmation, vous avez une expérience en HTML, CSS, PHP, C/C++, Python, PL-SQL, T-SQL et Shell. Vous maîtrisez également les méthodes d'analyse telles que MERISE et UML, ainsi que les environnements de développement tels que Visual Studio, SublimeText et Dev-C++. Enfin, vous avez de l'expérience dans les bases de données Oracle et SQL Server.</p>
        <p className="m-0" style={{ textAlign: 'justify' }}>
        En dehors du travail, vos centres d'intérêt comprennent les voyages, la cryptomonnaie et le graphisme. Vous avez également obtenu plusieurs certificats professionnels, notamment le certificat Coursera de l'Université du Michigan pour Python : Fonctions, Fichiers et Dictionnaires et Collecte et Traitement de Données avec Python. Vous avez également un certificat de LinkedIn pour la Sécurité des Réseaux, Réseaux Informatiques et Administration Système, ainsi qu'un certificat CCNA Routing and Switching de Cisco Networking Academy. Ces certificats témoignent de votre engagement à rester à jour avec les dernières technologies et à améliorer vos compétences professionnelles. </p>
      </Card>
    </section>
  );
}

export default App;
