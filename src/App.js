import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Profile from './components/Profile';
import About from './components/About';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
          faLocationArrow, faCoffee, faMobile, faEnvelope,
          faAt, faCog, faBuilding, faCode, faUser, faAlignJustify
        } from '@fortawesome/free-solid-svg-icons';
 
library.add(
              fab, faCoffee, faMobile,faEnvelope, 
              faLocationArrow, faAt, faCog, faBuilding, 
              faCode, faUser, faAlignJustify 
            );


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className='p-2'>
            <Profile />
            <About />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default App;
