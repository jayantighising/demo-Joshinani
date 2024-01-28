import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

import styles from './wsp-gallery.module.css';

interface GalleryImage {
  img: string;
}

interface WSPGalleryProps {
  galleryImages: GalleryImage[];
}

const WSPGallery: React.FC<WSPGalleryProps> = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    setSlideNumber((prevSlideNumber) =>
      prevSlideNumber === 0 ? galleryImages.length - 1 : prevSlideNumber - 1
    );
  };

  const nextSlide = () => {
    setSlideNumber((prevSlideNumber) =>
      prevSlideNumber + 1 === galleryImages.length ? 0 : prevSlideNumber + 1
    );
  };

  return (
    <div>
        <div className={styles.galleryTitle}>Gallery</div>
        
      {openModal && (
        <div className={styles.sliderWrap}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={styles.btnClose}
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className={styles.btnPrev}
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className={styles.btnNext}
            onClick={nextSlide}
          />
          <div className={styles.fullScreenImage}>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      )}

      <div className={styles.galleryWrap}>
        {galleryImages.map((slide, index) => (
          <div
            className={styles.single}
            key={index}
            onClick={() => handleOpenModal(index)}
          >
            <img src={slide.img} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WSPGallery;
