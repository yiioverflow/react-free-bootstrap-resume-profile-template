import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Badge from 'react-bootstrap/Badge';

function Skills()
{
    return(
        <div>
            <Row className="border-bottom border-muted">                  
                <h5 class="text-uppercase"><FontAwesomeIcon icon="code" /><b> Skills</b></h5>
            </Row>

            <Row className="pt-3 pb-3 text-left"> 
                <h3>
                    <Badge variant="primary">PHP</Badge>{' '}
                    <Badge variant="primary">Yii1, Yii2</Badge>{' '}
                    <Badge variant="primary">Laravel</Badge>{' '}
                    <Badge variant="success">React.js</Badge>{' '}
                    <Badge variant="success">Vue</Badge>{' '}
                    <Badge variant="success">Node</Badge>{' '}
                    <Badge variant="success">Svelte</Badge>{' '}
                    <Badge variant="success">JQuery</Badge>{' '}
                    <Badge variant="info">HTML</Badge>{' '}
                    <Badge variant="info">CSS</Badge>{' '}
                    <Badge variant="info">Bootstrap</Badge>{' '}
                    <Badge variant="warning">Mysql</Badge>{' '}
                    <Badge variant="secondary">Git</Badge>{' '}
                    <Badge variant="secondary">SVN</Badge>{' '}
                    <Badge variant="secondary">AWS</Badge>{' '}
                    <Badge variant="secondary">Ubuntu</Badge>{' '}
                    <Badge variant="secondary">Jira</Badge>{' '}            
                </h3>
            </Row>

            <Row className="border-bottom border-muted">                  
                <h4 class="text-uppercase"><FontAwesomeIcon icon={['fab', 'tick']} /> <b>Education</b></h4>
            </Row>
            <Row class="pt-3"> 
                <h4 class="text-justify pr-3"><FontAwesomeIcon icon="cog" className="small" /> Batchelor of Technology <small> Computer Science and Engineering</small></h4>             
                <h4 class="text-justify pr-3"><FontAwesomeIcon icon="cog" className="small"/> Diploma<small> Computer Science and Engineering</small></h4>   
            </Row>              
        </div> 
    );
}
export default Skills;