import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../../assets/1200x400.png";
import './Carousel.css';

const Carousel: React.FC = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block custom-carousel-image"
            src={Image}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block custom-carousel-image"
            src={Image}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block custom-carousel-image"
            src={Image}
            alt="Third slide"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
