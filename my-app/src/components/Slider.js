import React, { useEffect } from 'react';
import './Slider.css';

function Slider() {
  useEffect(() => {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('li');

    // Store the total number of images
    const slideCount = slides.length;
    let activeSlide = 0;

    // Ensure the first slide is visible initially
    slides[activeSlide].classList.add('active');

    // To change the images dynamically every 2 Secs, use setInterval() method
    const interval = setInterval(() => {
      slides[activeSlide].classList.remove('active');
      activeSlide++;
      if (activeSlide === slideCount) {
        activeSlide = 0;
      }
      slides[activeSlide].classList.add('active');
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="slider">
        <ul>
          <li>
            <img src="image 3.png" alt="GFG Image 1" />
          </li>
          <li>
            <img src="image 4 (1).png" alt="GFG Image 2" />
          </li>
          <li>
            <img src="image 3.png" alt="GFG Image 3" />
          </li>
          <li>
            <img src="image 4 (1).png" alt="GFG Image 4" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Slider;
