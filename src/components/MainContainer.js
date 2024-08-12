import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [stockType, setStockType] = useState('')
  const [sort, setSort] = useState('')

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])  

  const handleStockClick = (e) => {
    const stockName = e.target.firstChild.textContent 
    const chosenStock = stocks.find(stock => stock.name === stockName || stock.ticker === stockName)
    setMyStocks([...myStocks, chosenStock])    
  }

  const deletePortfolioStock = (e) => {
    const stockName = e.target.firstChild.textContent
    const filteredStocks = myStocks.filter(stock => stock.name !== stockName) 
    setMyStocks(filteredStocks)   
  }

  function handleTypeChange(e) {
    setStockType(e.target.value);
  }

  function handleCheckBtn(e) {
    setSort(e.target.value)
  }

  return (
    <div>
      <SearchBar handleTypeChange={handleTypeChange} 
                 handleCheckBtn={handleCheckBtn}
                 sort={sort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleStockClick={handleStockClick} stockType={stockType} sort={sort}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} deletePortfolioStock={deletePortfolioStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
