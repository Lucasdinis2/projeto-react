import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ConsultaIBGE from './components/ConsultaIBGE';
import ConsultaDDD from './components/ConsultaDDD';

function App() {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Consulta BrasilAPI</h2>
      <Row>
      <Col md={6}><ConsultaIBGE /></Col>
      <Col md={6}><ConsultaDDD /></Col>
      </Row>
    </Container>
  );
}

export default App;
