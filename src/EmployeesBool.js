import './EmployeesBool.css'
import React from 'react'
import Switch from '@mui/material/Switch';

const EmployeesBool = ({label, isWorking, handleChange}) => {
  return (
    <div className='EmployeesBoolContainer'>
      <span>{label}</span>
      <Switch color="primary" label={label} value={isWorking} onClick={handleChange}/>
    </div>
  )
}

export default EmployeesBool