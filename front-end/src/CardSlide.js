import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import './CSS/CardSlide.css'
import useFetch from "./useFetch";
import CardItem from "./CardItem";

const CardSlide = () => {

    const{data: furniture} = useFetch('http://localhost:8000/furniture')
    const{data: furniture2} = useFetch('http://localhost:8000/furniture2')
    console.log("API out",furniture)

    return ( 
        <Container className="" fluid="md">
            <Carousel variant="dark">
                <Carousel.Item>
                     <Row>
                        <Col>
                            {furniture && <CardItem furniture={furniture}/>}
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                     <Row>
                        <Col>
                            {furniture && <CardItem furniture={furniture2}/>}
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
          
        </Container>      
     );
}
 
export default CardSlide;



