import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

import image5 from './img/image5.jpg';
import image6 from './img/image6.jpg';
import image7 from './img/image7.jpg';
import image8 from './img/image8.jpg';
import image9 from './img/image9.jpg';
import image10 from './img/image10.jpg';
import image11 from './img/image11.jpg';
import image12 from './img/image12.jpg';



const images = [image5, image6, image7, image8, image9, image10, image11, image12];

const Gallery = () => {
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
      <div className='gallery'>
        {images.map((imgs, index) => (
          <img
            key={index}
            src={imgs}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => openModal(index)}
            className="gallery-image"
          />
        ))}
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Image Modal' className='modal'>
          <div className='modal-content'>
            <img src={currentImage} alt='Enlarged view' className='modal-image' />
            <button onClick={closeModal} className='close-button'>X</button>
            <button onClick={showPreviousImage} className='arrow arrow-left'>&lt;</button>
            <button onClick={showNextImage} className='arrow arrow-right'>&gt;</button>
          </div>
        </Modal>
      </div>
    );
  };

export default Gallery;
