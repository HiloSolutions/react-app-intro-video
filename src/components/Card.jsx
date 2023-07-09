import React from 'react';
import './Card.css';
import fido from '../avatar-fido.jpg';
import { Avatar } from './Avatar';

const Card = (props) => {
  return (
    <div className="card">
      <Avatar 
        className="avatar"
        src={fido}
        alt="user"
        width={400}
        height={400}
      />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="additional-info">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Card;