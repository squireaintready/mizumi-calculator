import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import Results from "./Results";

function App() {
  useEffect(() => {
    setData(defaultData)
  }, [])

  const [data, setData] = useState({})
  const [modCash, setModCash] = useState(0)

  let serverPay = 0;
  let busserPay = 0;
  let paolaPay = 0;
  let meatPay = 0;
  let totalCount = 0;
  let cashPostServe = 0;

  const calculate = (s, b, pao, meat, cash) => {
    totalCount = s + (b * data?.bussers.percentage) + (pao * data?.paola.percentage) + (meat * data?.meat.percentage);
    totalCount = s + (b * data?.bussers.percentage) + (pao * data?.paola.percentage) + (meat * data?.meat.percentage);
    serverPay = s > 0 ? Math.ceil(cash / totalCount) : 0;
    paolaPay = pao > 0 ? Math.floor(serverPay * data.paola.percentage) : 0;
    cashPostServe = cash - ((serverPay * s) + paolaPay)
    busserPay = b > 0 ? Math.floor(cashPostServe / (b + meat)) : 0;
    meatPay = meat > 0 ? Math.ceil(busserPay / 2) : 0;
    let totalPaid = serverPay * s + busserPay * b + paolaPay + meatPay;
    setModCash(cash - totalPaid);
  }

  const handleDataChange = (s, b, pao, meat, cash) => {
    calculate(s, b, pao, meat, cash)

    setData({
      servers: {
        count: s,
        percentage: 1,
        pay: serverPay,
      },
      bussers: {
        count: b,
        percentage: 0.3,
        pay: 0,
      },
      paola: {
        count: pao,
        percentage: 0.4,
        pay: paolaPay,
      },
      meat: {
        count: meat,
        percentage: .15,
        pay: meatPay
      }
    })
  }

  return (
    <div className="App">
      <div className="container">
        <Form handleDataChange={handleDataChange}/>
        {data?.servers?.count > 0 
        ? (
          <Results data={data}/>
        ):(null)}
        {console.log(data)}
      </div>
    </div>
  );
}

const defaultData = {
  servers: {
    count: 0,
    percentage: 1,
    pay: 0,
  },
  bussers: {
    count: 0,
    percentage: 0.3,
    pay: 0,
  },
  paola: {
    count: 0,
    percentage: 0.4,
    pay: 0,
  },
  meat: {
    count: 0,
    percentage: .15,
    pay: 0
  }
};

export default App;
