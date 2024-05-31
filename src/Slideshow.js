import React, { useState } from 'react';

import Slider from 'react-slick';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';

import './App.css';

const images = [image1, image2, image3,image4];

const Slideshow = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const openModal = (index) => {
      setCurrentIndex(index);
      setCurrentImage(images[index]);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
      setCurrentImage(null);
    };
  
    const showPreviousImage = () => {
      const newIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      setCurrentIndex(newIndex);
      setCurrentImage(images[newIndex]);
    };
  
    const showNextImage = () => {
      const newIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      setCurrentIndex(newIndex);
      setCurrentImage(images[newIndex]);
    };

    return (
      <div className="slideshow">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="slide-item">
              <img src={img} 
                   alt={`Slide ${index + 1}`} 
                   className="slide-image" 
                   onClick={() => openModal(index)}
               />
               <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Image Modal' className='modal'>
          <div className='modal-content'>
            <img src={currentImage} alt='Enlarged view' className='modal-image' />
            <button onClick={closeModal} className='close-button'>X</button>
            <button onClick={showPreviousImage} className='arrow arrow-left'>&lt;</button>
            <button onClick={showNextImage} className='arrow arrow-right'>&gt;</button>
          </div>
        </Modal>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
export default Slideshow;