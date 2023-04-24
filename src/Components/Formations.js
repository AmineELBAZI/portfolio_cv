import React from "react";
import { Card } from "react-bootstrap";

function Formations() {
    const formations = [
        {
            diplome: "Ecole Marocaine des Sciences de l’Ingénieur (EMSI Marrakech)                    ",
            etablissement: "Etudiant en 4eme année « Ingénierie Informatique et Réseaux »",
            annees: "2020 - 2023",
        },
        {
            diplome: "OFPPT -Diplôme de Technicien Spécialisé en Réseaux Informatiques",
            etablissement: "ISTA NTIC SIDI YOUSSEF BEN ALI",
            annees: "2018 - 2020",
        },
        {
            diplome: "1 ans - Sciences physique",
            etablissement: "Université Cadi Ayyad",
            annees: "2017 - 2018",
        },
        
       
        {
            diplome: "BAC - Sciences physique",
            etablissement: "Lycée el azozia, Marrakech",
            annees: " 2016_2017",
        },
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.etablissement}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formations;