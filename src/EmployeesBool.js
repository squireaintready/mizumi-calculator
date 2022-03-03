import './EmployeesBool.css'
import React from 'react'
import Switch from '@mui/material/Switch';
import { cyan } from '@mui/material/colors';


const EmployeesBool = ({label, isWorking, handleChange}) => {
  return (
    <div className='EmployeesBoolContainer'>
      <span>{label}</span>
      <Switch label={label} value={isWorking} onClick={handleChange}/>
    </div>
  )
}

export default EmployeesBool