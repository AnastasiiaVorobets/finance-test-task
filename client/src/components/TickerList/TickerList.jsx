import Tickers from "../Tickers/Tickers";

function TickersList({tickers = [] }) {
  return (
    <div>
      {tickers.map((ticker) => (
        <Tickers ticker={ticker} key={ticker.ticker}/>
      ))}
    </div>
  );
}

export default TickersList;
