import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Footer()
{
return(
    <footer>
        <hr />
        <Container fluid>
            <Row className="justify-content-center">
                <span class="text-muted">© 2020 Copyright: <a href="http://roopz.club/"> roopz.club</a></span>
            </Row>            
        </Container>
    </footer>
    );
}

export default Footer;