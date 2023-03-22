import React, { useEffect,useState } from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
/* import styled from 'styled-components'; */


/* let YellowBtn = styled.button `
    background:yellow;
    color: black;
    padding: 10px;
`
 */

const Detail = (props) => {
    let {id} = useParams();
    console.log(id);
    let finds=props.garments.find(function(x){
        return x.id == id
    });
    let [alert, setAlert] = useState(true)

    useEffect(()=>{
       let timer= setTimeout(()=>{
            setAlert(false);
            console.log(1);
            return () =>{ //useEffect가 동작하기전에 실행
                clearTimeout(timer)
            } //clear up function
        },2000)
    }, []) //[]디펜던시 1회만 실행하고 싶을떄
    return (
        <Container className="mt20">
            {/* <Box>
                <YellowBtn>버튼</YellowBtn>
                <YellowBtn1 bg="blue">버튼</YellowBtn1>
            </Box> */}
            {
                alert == true ? <div className='alert alert-warning'> 2초이내 구매시 할인</div> : null
            }
           
           <Col >
           <img src={finds.imges} width="80%" />
           </Col>
           
            <Row >
                <Col >
                 
                   {/*  <h4 className='mt20'>{props.garments[현재url에 입력한 숫자].title}</h4> */}
                    <h4 className='mt20'>{finds.title}</h4>
                    <p>{finds.content}</p>
                    <p>{finds.price}</p>
                    <button className="btn">주문하기</button>
                 </Col>
             </Row>
        </Container>
    );
};

export default Detail;