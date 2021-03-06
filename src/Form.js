import React, { useState } from "react";

// STYLES
import "./Form.css";

// INTERNAL COMPONENTS
import EmployeesBool from "./EmployeesBool";
import EmployeesCounter from "./EmployeesCounter";

// EXTERNAL COMPONENTS
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

const Form = ({handleDataChange}) => {
  const [numS, setNumS] = useState(0);
  const [numB, setNumB] = useState(0);
  const [isPaola, setIsPaola] = useState(false);
  const [isMeat, setIsMeat] = useState(false);
  const [cash, setCash] = useState(0);

  const handleSChange = (num) => {
    setNumS(num);
  };
  const handleBChange = (num) => {
    setNumB(num);
  };

  const handlePaolaChange = () => {
    setIsPaola((prev) => !prev);
  };
  const handleMeatChange = () => {
    setIsMeat((prev) => !prev);
  };

  const handleCashChange = (e) => {
    if(parseInt(e.target.value) >= 0 ){
      setCash(parseInt(e.target.value))
    }else if (e.target.value === ""){
      setCash('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDataChange(
      numS,
      numB,
      isPaola ? 1 : 0,
      isMeat ? 1 : 0,
      cash
    )
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="boolBusgirls">
          <EmployeesBool
            isWorking={isPaola}
            label="Paola"
            handleChange={handlePaolaChange}
          />
          <EmployeesBool
            isWorking={isMeat}
            label="Meats"
            handleChange={handleMeatChange}
          />
        </div>
        <div className="employeesCounterContainer">
          <EmployeesCounter
            numE={numS}
            handleChange={handleSChange}
            label="Servers"
          />
          <EmployeesCounter
            numE={numB}
            handleChange={handleBChange}
            label="Busboys"
          />
        </div>
        <div className="bottom">
          <TextField
            required
            label="Cash"
            value={cash}
            onChange={handleCashChange}
            inputProps={{ inputMode: 'numeric' }}
          />
          <Button type='submit' variant="contained">calculate</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
