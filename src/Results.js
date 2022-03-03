import React from "react";

import Grid from "@mui/material/Grid";
import "./Results.css";

const Results = ({ data }) => {
  return (
    <div className="resultsContainer">
      <span></span>
      <h3>Paid</h3>
      <h3>Total</h3>
      <h4>Servers</h4>
      <p>{data.servers.pay}</p>
      <p>{data.servers.pay * data.servers.count}</p>
      {data.bussers.pay > 0 ? (
        <>
          <h4>Busboy</h4>
          <p>{data.bussers.pay}</p>
          <p>{data.bussers.pay * data.servers.count}</p>
        </>
      ) : null}
      {data.paola.pay > 0 ? (
        <>
          <h4>Paola</h4>
          <p>{data.paola.pay}</p>
          <p>{data.paola.pay * data.servers.count}</p>
        </>
      ) : null}
      {data.meat.pay > 0 ? (
        <>
          <h4>Meat</h4>
          <p>{data.meat.pay}</p>
          <p>{data.meat.pay * data.servers.count}</p>
        </>
      ) : null}
      {data.toReturn > 0 ? (
        <>
          <h4>Return</h4>
          <p></p>
          <p>{data.toReturn}</p>
        </>
      ) : null}
        <>
          <h4>Remainder</h4>
          <p></p>
          <p className='redText'>{data.remainder}</p>
        </>
    </div>
  );
};

export default Results;

// const data = {
//   servers: {
//     count: 5,
//     percentage: 1,
//     pay: 0,
//   },
//   paola: {
//     count: 3,
//     percentage: 0.4,
//     pay: 0,
//   },
//   bussers: {
//     count: 3.5,
//     percentage: 0.3,
//     pay: 0,
//   },
// };
