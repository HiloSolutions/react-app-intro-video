import React, { useRef } from 'react';
import './Scroll.css';

const Scroll = () => {
  const listRef = useRef(null);
  const scrollToTopButtonRef = useRef(null);

  const handleScrollToTop = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToIndex = (index) => {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  // Array of image objects
  const images = [
    {
      src:
        'https://images.pexels.com/photos/755834/pexels-photo-755834.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cat',
    },
    {
      src:
        'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dog',
    },
    {
      src:
        'https://images.pexels.com/photos/3015884/pexels-photo-3015884.jpeg?auto=compress&cs=tinysrgb&w=8000',
      alt: 'Llama',
    },
  ];

  return (
    <div className="card">
      <h2>V5 - React useRef hook (DOM Access)</h2>
      <nav className='ref-example'>
        {images.map((image, index) => (
          <button key={index} onClick={() => scrollToIndex(index)}>
            {image.alt}
          </button>
        ))}
      </nav>
      <div>
        <ul ref={listRef}>
          {images.map((image, index) => (
            <li className="item"key={index}>
              <img src={image.src} alt={image.alt} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Scroll down, and you'll see the button!</p>
        <button ref={scrollToTopButtonRef} onClick={handleScrollToTop}>
          Scroll to Top
        </button>
      </div>
    </div>
  );
};

export default Scroll;
