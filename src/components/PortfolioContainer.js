import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks, deletePortfolioStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myStocks.map(stock => 
        <Stock key={stock.id} 
               stock={stock} 
               deletePortfolioStock={deletePortfolioStock}
        />)
      }
    </div>
  );
}

export default PortfolioContainer;
