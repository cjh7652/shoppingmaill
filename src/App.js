import {Navbar, Container, Nav, Col, Row} from 'react-bootstrap';
import './App.css';
/* import 작명 from '이미지 경로'; */
import bg from './img/mainbg.jpg';
/* import best1 from './img/best1.jpg';
import best2 from './img/best2.jpg';
import best3 from './img/best3.jpg';
 */
function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Attrangs Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#best">Best</Nav.Link>
          </Nav >
        </Container>
      </Navbar> 
      <div className='main-bg' style={{backgroundImage :'url('+bg+')' }}></div> 
      <Container>
            <Row>
                <Col>
                    <img src='./img/best1.git' alt="" />
                    <h4>상품명</h4>
                    <p>상품설명</p>
                </Col>
                <Col>
                <img src='' alt="" />
                    <h4>상품명</h4>
                    <p>상품설명</p>
                </Col>
                <Col>
                <img src='' alt="" />
                    <h4>상품명</h4>
                    <p>상품설명</p>
                </Col>
            </Row>
      </Container>
    </div>
  );
}

export default App;
