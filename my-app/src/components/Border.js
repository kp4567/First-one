import React, { useEffect } from 'react';
import './Border.css';

function Border() {
  useEffect(() => {
    const leftBox = document.querySelector('.left-box');
    const rightBox = document.querySelector('.right-box');
    const leftSweets = document.querySelector('.left-box-sweets');
    const rightSweets = document.querySelector('.right-box-sweets');

    leftBox.addEventListener('mouseenter', () => {
      leftSweets.classList.remove('hidden');
      leftSweets.style.opacity = '1';
    });

    leftBox.addEventListener('mouseleave', () => {
      leftSweets.style.opacity = '0';
      setTimeout(() => {
        leftSweets.classList.add('hidden');
      }, 500);
    });

    rightBox.addEventListener('mouseenter', () => {
      rightSweets.classList.remove('hidden');
      rightSweets.style.opacity = '1';
    });

    rightBox.addEventListener('mouseleave', () => {
      rightSweets.style.opacity = '0';
      setTimeout(() => {
        rightSweets.classList.add('hidden');
      }, 500);
    });
  }, []);

  return (
    <div className="border">
      <img src="Rectangle 32.png" alt="Border Image" />
      <div className="inner-border left-box">
        <img src="Component 22.png" alt="Sweet 1" className="sweet-image" />
        <div className="left-box-sweets sweets hidden">
          <img src="Property 1=Component 21.png" alt="Left Box Sweet 1" className="sweet" />
        </div>
      </div>
      <div className="inner-border right-box">
        <img src="Component 26.png" alt="Sweet 2" className="sweet-image" />
        <div className="right-box-sweets sweets hidden">
          <img src="Property 1=Component 25 (1).png" alt="Right Box Sweet 2" className="sweet" />
        </div>
      </div>
    </div>
  );
}

export default Border;
