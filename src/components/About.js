import React from 'react';
import Col from 'react-bootstrap/Col';
import Work from './work';
import Skills from './Skills';
import Row from 'react-bootstrap/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function About()
{
    return(
        <Col md={8} className="bg-white text-secondary pt-3 pl-3">
            <Row className="border-bottom border-muted"> 
            <Col xs={6} md={4}>
                <h5 className="text-uppercase text-left"><FontAwesomeIcon icon="user"/><b> About Me</b></h5>
            </Col>              
            <Col xs={6} md={8}>
                <h6 className="text-right">
                        <span className="h6 small text-muted">Other site variants</span>{' '}
                        <a className="badge badge-primary text-decoration-none" href="http://react.roopz.club">React</a>{' '}
                        <a className="badge badge-warning text-decoration-none" href="http://react.roopz.club">React</a>{' '}
                        <a className="badge badge-info text-decoration-none" href="http://react.roopz.club">React</a>{' '}           
                </h6>
            </Col>   
            </Row>
            <Row className="pt-2"> 
                <p className="text-justify">Over the past 12 years I have continuously challenged myself with new languages, frameworks and methodologies. My core languages have always been PHP, HTML, CSS &amp; JAVASCRIPT. But I have worked as a fullstack developer building both bespoke CMS solutions and small business applications. My current role at Creative Anvil is Fullstack Developer for a small React team and have been developing with Yii, React, Bootsrap for the past 3 years.</p>              
            </Row>   
            <Work />
            <Skills /> 
        </Col>
    );
}
export default About;