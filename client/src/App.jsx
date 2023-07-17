import React, { useEffect, useState } from 'react';
import './App.css';
import socketIO from 'socket.io-client';
import TickerList from "../src/components/TickerList";
const socket = socketIO.connect('http://localhost:4000');

function App() {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', (response) => setTickers(response));

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="App">
      <TickerList  tickers={tickers}/>
    </div>
  );
}

export default App;
