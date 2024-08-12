import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleStockClick, stockType, sort }) {

  const renderStocks = () => {
    let stocksToDisplay = stocks.filter(stock => stock.type === stockType)
    if(sort === "Alphabetically") {
      stocksToDisplay = stocksToDisplay.sort((a, b) => a.name > b.name ? 1 : -1)
    } else {
      stocksToDisplay = stocksToDisplay.sort((a, b) => a.price - b.price)
    }
    return stocksToDisplay.map(stock => {
      return <Stock key={stock.id} stock={stock} handleStockClick={handleStockClick}/>
    })
  }

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks()}
    </div>
  );
}

export default StockContainer;
