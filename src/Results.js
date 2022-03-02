import React from 'react'

import Grid from '@mui/material/Grid';
import './Results.css'

const Results = ({data}) => {

  return (
    <div className='resultsContainer'>
        <span></span>
        <span>Pay amount</span>
        <span>Count</span>
        <span>Servers</span>
        <span>{data.servers.pay}</span>
        <span>{data.servers.pay * data.servers.count}</span>
        <span>Busboy</span>
        <span>{data.bussers.pay}</span>
        <span>{data.bussers.pay * data.servers.count}</span>
        <span>Paola</span>
        <span>{data.paola.pay}</span>
        <span>{data.paola.pay * data.servers.count}</span>
        <span>Meat</span>
        <span>{data.meat.pay}</span>
        <span>{data.meat.pay * data.servers.count}</span>
    </div>
  )
}

export default Results

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
