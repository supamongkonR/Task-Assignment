import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import './CSS/Slide.css'
const Slide = () => {
    return ( 
        <Carousel>
        <Carousel.Item>
          <img
            className="imgs"
            src="https://wallpaperaccess.com/full/2076198.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Design you home</h3>
            <p>here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgs"
            src="https://wallpaperaccess.com/full/2076139.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Start Now</h3>
            <p>Get 50% off.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgs"
            src="https://www.pixelstalk.net/wp-content/uploads/images1/Interior-design-furniture-room-wallpaper-1920x1200.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Go for you dream house</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}
 
export default Slide;