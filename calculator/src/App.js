import './App.css';
import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const updateCalc = (e) => {
    setCalc(calc + e.target.value);
  };

  const updateResult = (e) => {
    setResult (eval(calc));
  };

  const clearFunc = () => {
    setCalc("");
    setResult("0");
  };


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
        <input type="text" value={calc} readOnly />
      <br />
      <input type="text" value={result} readOnly />
      <br />
        </div>
        <div className="operators">
          <button value="/" onClick={updateCalc}>/</button>
          <button value="*" onClick={updateCalc}>*</button>
          <button value="+" onClick={updateCalc}>+</button>
          <button value="-" onClick={updateCalc}>-</button>
          <button value="" onClick={clearFunc}>DEL</button>
          </div>
          <div className="digits">
          <button value="0" onClick={updateCalc}>0</button> 
          <button value="." onClick={updateCalc}>.</button>   
          <button value="=" onClick={updateResult}>=</button> 
          <button value="1" onClick={updateCalc}>1</button>
          <button value="2" onClick={updateCalc}>2</button> 
          <button value="3" onClick={updateCalc}>3</button>  
          <button value="4" onClick={updateCalc}>4</button>
          <button value="5" onClick={updateCalc}>5</button>  
          <button value="6" onClick={updateCalc}>6</button>  
          <button value="7" onClick={updateCalc}>7</button>  
          <button value="8" onClick={updateCalc}>8</button>  
          <button value="9" onClick={updateCalc}>9</button>  
          </div>
        </div>
      </div>
  );
}

export default App;
