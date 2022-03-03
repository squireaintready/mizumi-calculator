// STYLES
import './EmployeesBool.css'

// LIBRARIES
import Switch from '@mui/material/Switch';


const EmployeesBool = ({label, isWorking, handleChange}) => {
  return (
    <div className='EmployeesBoolContainer'>
      <span>{label}</span>
      <Switch label={label} value={isWorking} onClick={handleChange}/>
    </div>
  )
}

export default EmployeesBool