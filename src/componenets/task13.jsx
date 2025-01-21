import React from 'react';
import Imag from './imag.jpg'

function Task13() {

  const cardsData = [
    {
      title: 'this is the first card',
      description: 'second',
      imageUrl:Imag ,   
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      imageUrl: Imag, 
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      imageUrl: Imag, 
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {cardsData.map((card, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            width: '200px',
            textAlign: 'center',
          }}
        >
          <img
            src={card.imageUrl}
            alt={card.title}
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Task13;