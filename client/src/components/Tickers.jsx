import React, { useState, useEffect } from 'react';

function Tickers({ ticker }) {
  const [prevPrice, setPrevPrice] = useState(ticker.price);

  useEffect(() => {
    setPrevPrice(prev => {
      if (prev !== ticker.price) {
        return prev;
      } else {
        return ticker.price;
      }
    });
  }, [ticker.price]);

  const priceReduction = ticker.price < prevPrice;
  const priceSign = {priceReduction} ? '-' : '+';

  return (
    <div className={`ticker_block ${priceReduction ? 'red_color' : 'green_color'}`}>
      <h1>{ticker.ticker}</h1>
      <p>Price: {ticker.price}</p>
       
      <div className='ticker__change'>
          <p>Change: {priceSign} {ticker.change}</p>
          <p>{priceSign} {ticker.change_percent} % </p>
      </div>
    </div>
  );
}

export default Tickers;
