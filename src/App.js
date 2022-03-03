import React, { useState, useEffect } from "react";
// CUSTOM COMPONENTS
import Form from "./Form";
import Results from "./Results";

// STYLES
import "./App.css";

// EXTERNAL LIBRARIES
import Lottie from "react-lottie";
import moneyGrowthAnimation from "./moneyGrowth.json";

function App() {
  useEffect(() => {}, []);

  const moneyGrowthOptions = {
    loop: true,
    autoplay: true,
    animationData: moneyGrowthAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const cashLotteDimensions = window.innerHeight / 4;
  const cardLotteDimensions = window.innerHeight / 6;

  const [data, setData] = useState(defaultData);
  const [toggleResults, setToggleResults] = useState(false);

  let serverPay = 0;
  let busserPay = 0;
  let paolaPay = 0;
  let meatPay = 0;
  let totalCount = 0;
  let cashPostServe = 0;
  let totalPaid = 0;
  let modCash = 0;

  const calculate = (s, b, pao, meat, cash) => {
    totalCount =
      s +
      b * data?.bussers.percentage +
      data?.paola.percentage +
      data?.meat.percentage;
    serverPay = s > 0 ? Math.ceil(cash / totalCount) : 0;
    paolaPay = pao > 0 ? Math.floor(serverPay * data.paola.percentage) : 0;
    cashPostServe = cash - (serverPay * s + paolaPay);
    busserPay = b > 0 ? Math.floor(cashPostServe / (b + meat / 2)) : 0;
    meatPay = meat > 0 ? Math.ceil(busserPay / 2) : 0;
    totalPaid = serverPay * s + busserPay * b + paolaPay + meatPay;
    modCash = cash - totalPaid;
  };

  const handleDataChange = (s, b, pao, meat, cash) => {
    calculate(s, b, pao, meat, cash);
    setData({
      servers: {
        count: s,
        percentage: 1,
        pay: serverPay,
      },
      bussers: {
        count: b,
        percentage: 0.3,
        pay: busserPay,
      },
      paola: {
        count: pao,
        percentage: 0.4,
        pay: paolaPay,
      },
      meat: {
        count: meat,
        percentage: 0.15,
        pay: meatPay,
      },
      toReturn: busserPay * b + paolaPay + meatPay,
      remainder: modCash,
    });
    setToggleResults(!toggleResults);
  };

  return (
    <div className="App">
      <div className="rotate-in">
        <Form handleDataChange={handleDataChange} />
        <Results data={data} toggleResults={toggleResults} />
      </div>
      <div className='moneyGrowth'>
        <Lottie
          options={moneyGrowthOptions}
          height={cashLotteDimensions}
          width={cashLotteDimensions}
        />
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
    percentage: 0.15,
    pay: 0,
  },
  toReturn: 0,
  remainder: 0,
};

export default App;
