import React from 'react';
import Card from 'react-bootstrap/Card';

const projects = [
    {
        name: "mobile project pokemon app",
        school: "emsi",
        competition: "4eme année ",
        link: "https://github.com/"
    },
    {
        name: "  GoalFinder  :spring boot + react app ",
        school: "emsi",
        competition: "4eme année ",
        link: "https://github.com/"
    },
    {
        name: "miniprojet_biblio",
        school: "emsi",
        competition: "3eme année ",
        link: "https://github.com/"
    }
];

const ProjectCard = () => {
    return (
        <div className="project-container">
            {projects.map((project, index) => (
                <Card key={index} className="project-card">
                    <Card.Body>
                        <Card.Title className="project-title">{project.name}</Card.Title>
                        {project.school && <Card.Subtitle className="project-school">{project.school}</Card.Subtitle>}
                        {project.competition && <Card.Text className="project-competition">{project.competition}</Card.Text>}
                        <Card.Link href={project.link} className="project-link">Voir le projet</Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ProjectCard;
