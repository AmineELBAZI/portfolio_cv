import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';


function CertificationCard(props) {
    const { title, issuer, date, id } = props;
    return (
        <Card className="h-100">
           
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <span>{issuer}</span>
                    <br />
                    <span>Date de délivrance : {date}</span>
                    <br />
                    <span>Identifiant : {id}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function Certificats() {
    const certifications = [
        {
           
            title: 'Devenir administrateur / administratrice réseau',
            issuer: '	LinkedIn ',
            date: 'Mar 08, 2021',
            id: 'AYUPxnzGDqTd_DSYSvKGNlMztfj6'
        },
        {
           
            title: 'Les fondements des réseaux : La sécurité',
            issuer: 'LinkedIn',
            date: 'Mar 08, 2021 ',
            id: 'E520-AbTJ6tETA52Ua3O9Wma7YT_voqim'
        },
        {
            
            title: ' DevOps Cloud and Agile Foundations ',
            issuer: 'IBM',
            date: 'Mar 24, 2023',
            id: 'https://www.coursera.org/account/accomplishments/specialization/LUYQMPWWZZ8C'
        },
      
        {
            
            title: 'CCNA Routing and Switching: Routing and Switching Essentials',
            issuer: 'cisco',
            date: ' Nov 19, 2020',
            id: '-------'
        },
        {
            
            title: 'Advanced React',
            issuer: 'MetaMeta',
            date: 'avr. 2023',
            id: 'https://www.coursera.org/account/accomplishments/verify/MY2RM3JKEQMM'
        }
    ];
    const PAGE_SIZE = 3;
    const [activePage, setActivePage] = React.useState(1);

    const totalPages = Math.ceil(certifications.length / PAGE_SIZE);

    const handleClick = (event) => {
        setActivePage(event.target.text);
    }

    const pages = [];

    for (let number = 1; number <= totalPages; number++) {
        pages.push(
            <Pagination.Item key={number} active={number === activePage} onClick={handleClick}>
                {number}
            </Pagination.Item>,
        );
    }

    const startIndex = (activePage - 1) * PAGE_SIZE;
    const endIndex = activePage * PAGE_SIZE;
    const currentCertifications = certifications.slice(startIndex, endIndex);

    return (
        <div>
            <Row className="my-3">
                {currentCertifications.map(certification => (
                    <Col key={certification.id} xs={12} sm={6} lg={4} className="d-flex">
                        <CertificationCard {...certification} />
                    </Col>
                ))}
            </Row>
            <Row className="my-3">
                <Col>
                    <Pagination>{pages}</Pagination>
                </Col>
            </Row>
        </div>
    );
}

export default Certificats;