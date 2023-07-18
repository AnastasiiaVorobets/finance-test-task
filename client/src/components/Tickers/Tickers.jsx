import React, { useState, useEffect } from 'react';
import './tickers.css';

function Tickers({ tickers }) {
  const {
    ticker,
    price,
    change,
    change_percent,
  } = tickers;
  
  const [prevPrice, setPrevPrice] = useState(price);

  useEffect(() => {
    setPrevPrice(prev => {
      if (prev !== price) {
        return prev;
      } else {
        return price;
      }
    });
  }, [price]);

  const priceReduction = price < prevPrice;

  return (
    <div className={`ticker_block ${priceReduction ? 'red_color' : 'green_color'}`}>
      <h1>{ticker}</h1>
      <p>Price: {price}</p>
       
      <div className='ticker__change'>
        <p>Change: {priceReduction ? '-' : '+'} {change}</p>
        <p>{priceReduction ? '-' : '+'} {change_percent} % </p>
      </div>
    </div>
  );
}

export default Tickers;
