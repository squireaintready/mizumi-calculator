// STYLES
import './EmployeesCounter.css'

// ICONS
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

// EXTERNAL COMPONENTS
import TextField from '@mui/material/TextField';

const EmployeesCounter = ({label, numE, handleChange}) => {
  const handleOnChange = (e) => {
    if(e.target.value >= 0){
      handleChange(parseInt(e.target.value))
    }
  }

  const increment = () => {
    if(numE > 0){
      handleChange(parseInt(numE) + 1)
    }else{
      handleChange(1)
    }
  }

  const decrement = () => {
    if(numE > 0){
      handleChange(parseInt(numE) - 1)
    }
  }

  return (
    <div className='counterContainer'>
      <RemoveCircleIcon color='primary' onClick={decrement}/>
        <TextField color="primary" inputProps={{ inputMode: 'numeric' }} label={label} onChange={handleOnChange} value={numE > 0 ? numE : ""} variant="standard"/>
      <AddCircleIcon color='primary' onClick={increment}/>
    </div>
  )
}

export default EmployeesCounter