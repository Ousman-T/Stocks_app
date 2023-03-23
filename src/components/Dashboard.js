

function Dashboard(){
    return(
        function DataMap(){
            stocks.map((name) => {
              <div>
              <h2>{stocks.name}</h2>
              <p>{stocks.symbol}</p>
              <p>{stocks.lastPrice}</p>
              <p>{stocks.change}</p>
              </div>
            })
          }
    )
}

export default Dashboard