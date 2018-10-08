import React from 'react';
import './cards.scss';

const Card = ({ description, index }) => {
  return <div className='card' >
  <div className="card-header"><h5>Post #{index+1}</h5></div>
    <div className="card-body">
      <p className="card-text">{description}</p>
    </div>
  </div>
}

export default Card;