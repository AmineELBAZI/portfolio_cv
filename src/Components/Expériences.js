import React from 'react';
import { Card } from 'primereact/card';

const ExperienceCard = ({ logo, title, position, duration, courses }) => {
    return (
        <Card title={title} subTitle={position} footer={duration}>
            <div>
                <h5>Cours:</h5>
                <ul>
                    {courses.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

const Expériences = () => {
    // Données pour chaque expérience
    const experienceData = [
      
        {
            
            title: 'stage de fin de formation (OFPPT) ',
            encadrement: 'Professeur (somia jalil)',
            entreprise: 'IT_QASDI',
            courses: [
                'active directory',
                'configuration réseau',
                'cable rj45 et rj11',
                'sécurité '
            ]
        },
        
            
            {
            
                title: 'stage de 3eme année de licence (emsi)',
                encadrement: 'Professeur (Dris Ssbar)',
                entreprise: '',
                courses: [
                    'Laravel',
                    'e commerce ',
                    'sécurité '
                ]
            },
    ];

    return (
        <section className="section">
            <div className="experience-grid">
                {experienceData.map((experience, index) => (
                    <div key={index} className="card" style={{ backgroundColor: "#f2f2f2", marginBottom: "20px" }}>
                        <ExperienceCard
                            title={experience.title}
                            position={experience.position}
                            duration={experience.duration}
                            courses={experience.courses}
                        />
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Expériences;
