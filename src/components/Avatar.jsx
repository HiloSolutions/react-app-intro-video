import React, { useState } from 'react';
import fido from '../avatar-fido.jpg'

export const Avatar = ({ className, src, alt, width = '100px', height }) => {

  const [image, setImage] = useState(fido)

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };


  return (
    <>
      <img
        className={className}
        src={image}
        alt={alt}
        width={width}
        height={height}
      />
      <input type="file" onChange={handleImageChange} />
    </>
  )
}
