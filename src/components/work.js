import React from 'react';
import Row from 'react-bootstrap/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Work()
{
    return(
        <div>
            <Row className="row border-bottom border-muted">
                <h5><FontAwesomeIcon icon="building"/>
                    <b className="text-uppercase"> Work Experience</b>
                </h5>
            </Row>

            {/*Exp 1*/}
            <Row className="pt-2">
                <h5 className="text-dark"><b>Independant Contractor<a href="https://www.anvilinsights.com/" className="text-decoration-none text-dark"> <small>Creative Anvil</small></a></b></h5>
            </Row>
            <Row>
                <h6>Feb, 2019</h6>
            </Row>
            <Row>
                <p className="text-justify pr-3">Works with various CRM projects for international storage and movers and real estate projects. PHP, Mysql, Yii1, Yii2 and React are the main tools used.</p>                                               
            </Row>

            {/*Exp 2*/}
            <Row className="pt-2">
                <h5 className="text-dark"><b>Yii framework Developer <a href="https://uae.sellanycar.com/" className="text-decoration-none text-dark"><small> SellanyCar</small></a></b></h5>
            </Row>
            <Row>
                <h6>Jan, 2018</h6>
            </Row>
            <Row>
                <p className="text-justify pr-3">Company is based in Dubai, UAE. My responsibilities was the complete Architecture of the project, development and testing. Yii2, Ionic are the main tools used.</p>                                               
            </Row>

            {/*Exp 3*/}
            <Row className="pt-2">
                <h5 className="text-dark"><b> Senior Fullstack Developer<a href="https://prologuetechnology.com/" className="text-decoration-none text-dark"><small> Prologue Technologies</small></a></b></h5>
            </Row>
            <Row>
                <h6>Nov, 2013</h6>
            </Row>
            <Row>
                <p className="text-justify pr-3">Storage and movers CRMs are the main project I worked here. PHP, Mysql, Yii1, Yii2 were the main tools used.</p>                                               
            </Row>

            {/*Exp 4*/}
            <Row className="pt-2">
                <h5 className="text-dark"><b>Fullstack Developer <a href="https://www.clevertech.biz/" className="text-decoration-none text-dark"><small> CleverTech</small></a></b></h5>
            </Row>
            <Row>
                <h6>Jan, 2013</h6>
            </Row>
            <Row>
            <p className="text-justify pr-3">Its an awesome experience to work with the team of world class developers around the globe remote. Yii and Javascript are the main tools used.</p>                                               
            </Row>  

            {/*Exp 5*/}
            <Row className="pt-2">
                <h5 className="text-dark"><b>Lead Front End Developer <a href="http://www.zadego.com/" className="text-decoration-none text-dark"><small> Zadego</small></a></b></h5>
            </Row>
            <Row>
                <h6>June, 2010</h6>
            </Row>
            <Row>
            <p className="text-justify pr-3">Austria based company, got opportunity to work with PHP, Javascript and Testing</p>                                               
            </Row>

            {/*Exp 6*/}
            <Row className="pt-2">
                <h5 className="text-dark"><b>Yii Framework Developer <a href="https://www.ndimensionz.com/" className="text-decoration-none text-dark"><small> NDimensionz Solutions</small></a></b></h5>
            </Row>
            <Row>
                <h6>Jan, 2011</h6>
            </Row>
            <Row>
                <p className="text-justify pr-3">My second company I worked as Senior PHP Developer / Yii Developer - Got an opportunity to work with online banking project. Played well with VISA APis</p>                                               
            </Row>   

            {/*Exp 7*/}
            <Row className="pt-2">
            <h5 className="text-dark"><b>Backed-End Developer <a href="https://siliconits.com/" className="text-decoration-none text-dark"><small> Silicon IT Solutions</small></a></b></h5>
            </Row>
            <Row>
                <h6>Jul, 2007</h6>
            </Row>
            <Row>
            <p className="text-justify pr-3">Worked in Banking projects - of co-operative banks and PHP and Jquery are the main tools used.</p>                                               
            </Row>    
        </div>
    );
} 

export default Work;