import {Navbar, Container, Nav, Col, Row} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
/* import 작명 from '이미지 경로'; */
import bg from './img/mainbg.jpg';
//import {a,b} from './data';// {}안에 있는 export한 이름을 그대로 써야 함 
import data from './data.js'; //경로는 ./로 시작
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail';



function App() {

   let [garments] = useState(data);
   let navigate = useNavigate(); //리액트 훅 함수가 하나 들어있음
  return (
    
    <div className="App">
     
     
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/" className='logo'>Attrangs Shop</Link>
          <Nav className="me-auto">
           {/*  <Link to="/">Home</Link>
            <Link to="/detail">상세페이지</Link> */}

            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link> 
           {/*  <Nav.Link onClick={() => {navigate(1)}}>Home</Nav.Link>  앞으로 한칸이동 (-1) 뒤로한칸이동*/}
            <Nav.Link onClick={() => {navigate('/detail')}}>상세페이지</Nav.Link>
          </Nav >
        </Container>
      </Navbar> 
      
      <Routes>
        <Route path="/" element={
        <>
            <div className='main-bg' style={{backgroundImage :'url('+bg+')' }}></div> 
            <Container className="mt20">
                    <h2 className='mb20'>Best of Best</h2>
                    <Row className='row'>
                        {
                            garments.map((a, i) => {
                                return (
                                    <Card garments={garments[i]} i={i+1} />
                                )
                            })
                        }
                    </Row>
                    <button onClick={()=>{
                        
                    }}>버튼</button>
            </Container>
           
        </>
        }/>
        <Route path="/detail/:id" element={<Detail garments={garments}  />}/>
        {/*  <Route path="*" element={<div>없는 페이지입니다</div>}/> */}
        {/*  nested routes */}
        <Route path="/about" element={<About/>} >
            <Route path="member" element={<div>멤버임</div>} />
            <Route path="location" element={<About/>} />
        </Route>
       {/*  <Route path="/about/memer" element={<About/>} />
        <Route path="/about/location" element={<About/>} /> */}
     </Routes>
    </div>  
  );
}

function About(){
    return (
        <div>
            <h4>회사정보임</h4>
            <Outlet></Outlet>  {/* nested routes를 보여줄공간 애기해야 함 */}
        </div>
    )
}

function Card(props){
  

    return(
       
            <Col >
                <Link to={`/detail/${props.garments.id}`}>
                    <img src={props.garments.imges} width="80%" /> 
                    <h4 className='mt20'>{props.garments.title}</h4>
                    <p>{props.garments.content}</p>
                    <p>{props.garments.price}</p>
                </Link>       
            </Col>
        
    )
}

export default App;
