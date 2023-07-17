import Tickers from "./Tickers";

function TickersList({tickers = [] }) {
  return (
    <div>
      <h1 className="title">Price tickers data on the UI in realtime</h1>
        <ul className="menu">
          <li className="menu__list">Futures</li>
          <li className="menu__list menu__list--crypto">Cryptocurrencies</li>
          <li className="menu__list">Currencies</li>
        </ul>
        {tickers.map((ticker) => (
          <Tickers ticker={ticker} key={ticker.ticker}/>
        ))}
    </div>
  );
}

export default TickersList;
