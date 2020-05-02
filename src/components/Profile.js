import React from 'react';
import photo from '../images/profile.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Badge from 'react-bootstrap/Badge';
function Profile()
{
    return(
        <Col md={4} className="pt-2 border-right-1 border-color-light">
            <Row className="justify-content-center">
                <Image role="presentation" src={photo} roundedCircle className='mt-2'/>
            </Row>
            <Row className='justify-content-center'>
                <h3 className="tex-center text-dark"><b>Roopan Valiya Veetil</b></h3>
            </Row>
            <Row className='justify-content-center'> 
                <h6 class="text-center text-muted">Fullstack Developer</h6>
            </Row>
            <Row className="justify-content-center">
                <ListGroup className="contact-links text-center text-dark" variant="flush">
                    <ListGroup.Item variant="flush"><FontAwesomeIcon icon="location-arrow" className="small"/> Kasargod, Kerala, India</ListGroup.Item>
                    <ListGroup.Item ariant="flush"><FontAwesomeIcon icon="mobile" className="small"/> (+91) 9496243415</ListGroup.Item>
                    <ListGroup.Item ariant="flush"><FontAwesomeIcon icon="envelope" className="small"/><a href="mailto:yiioverflow@gmail.com"> yiioverflow@gmail.com</a></ListGroup.Item>
                </ListGroup>
            </Row>
            <Row className="justify-content-center">
            <h6>    
                    <Badge variant="primary">PHP</Badge>{' '}
                    <Badge variant="primary">Yii</Badge>{' '}
                    <Badge variant="primary">Laravel</Badge>{' '}
                    <Badge variant="warning">React</Badge>{' '}
                    <Badge variant="warning">Vue</Badge>{' '}
                    <Badge variant="success">Node</Badge>{' '}
                    <Badge variant="success">Svelte</Badge>{' '}    
                </h6>
            </Row>
            <div class="row justify-content-center">
                <ul class="list-unstyled contact-links text-center text-dark">                    
                    <a href="https://github.com/yiioverflow"> <FontAwesomeIcon className="h1 text-dark text-decoration-none" icon={['fab', 'github']} /></a>
                    <a href="https://wa.me/919496243415"> <FontAwesomeIcon className="h1 text-success text-decoration-none" icon={['fab', 'whatsapp']} /></a>
                    <a href="skype:roopan.valiya.veetil?chat"> <FontAwesomeIcon className="h1 text-info text-decoration-none" icon={['fab', 'skype']} /></a>
                    <a href="https://facebook.com/roopz/"> <FontAwesomeIcon className="h1 text-primary text-decoration-none" icon={['fab', 'facebook']} /></a>
                    <a href="https://github.com/yiioverflow"> <FontAwesomeIcon className="h1 text-info text-decoration-none" icon="envelope" /></a>
                </ul>
            </div>
            <Row className="justify-content-center text-muted">
                <FontAwesomeIcon icon="cog" spin />
            </Row>   
            <Row className="justify-content-center">
                <p class="text-muted">Learning something new...</p>
            </Row>    
            <Row className="justify-content-center">
                <p class="text-center">I built this site with 
                <a class="fa fa-github text-primary text-decoration-none" href="https://roopz.club"> Html5</a> and 
                <a class="fa fa-github text-primary text-decoration-none" href="https://react.roopz.club"> React</a> components and Bootstrap. The full source code can be found in my <a class="fa fa-github text-primary" href="https://github.com/yiioverflow"> Github</a> repo.</p>
            </Row> 
        </Col>
    );
}
export default Profile;