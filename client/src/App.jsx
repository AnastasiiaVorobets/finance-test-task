import React, { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import TickerList from "./components/TickerList/TickerList";
import './App.css';

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
      <Header />
      <Menu />
      <TickerList tickers={tickers} />
    </div>
  );
}

export default App;
