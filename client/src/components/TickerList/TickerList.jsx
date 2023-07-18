import Tickers from "../Tickers/Tickers";

function TickersList({tickers = [] }) {
  return (
    <div>
      {tickers.map((ticker) => (
        <Tickers tickers={ticker} key={ticker.ticker}/>
      ))}
    </div>
  );
}

export default TickersList;
