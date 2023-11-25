// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Sumit
//         </a>

//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react"
import './App.css'

const App = () => {

  const [Weight, setWeight] = useState(0);
  const [Height, setHeight] = useState(0);
  const [Ans, setAns] = useState();
  const [msg, setMsg] = useState(' ');
  const [a_msg, setA_msg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(Height === 0 || Weight === 0) {
      document.getElementById('a_msg').style.display = 'block';
      setA_msg('Please Enter Height & Weight values');
    }
    else {
      document.getElementById('a_msg').style.display = 'none';
      let bmi = parseInt(Weight)/(parseInt(Height)*parseInt(Height))*703;
      setAns(bmi.toFixed(2));
      if(bmi < 25){
        document.getElementById('msg').style.color = 'yellow';
        setMsg('Message: Your are underweight.');
      }
      else if(bmi >= 25 && bmi < 30){
        document.getElementById('msg').style.color = "rgb(43, 255, 0)";
        setMsg('Message: Your are healthy weight.');
      }
      else{
        document.getElementById('msg').style.color = 'yellow';
        setMsg('Message: Your are overweight.');
      }
    }
  }

  return (
    <>
      <div className="main">
        <h1>BMI Calculator<hr /></h1>
        <form className="myform" onSubmit={onSubmit}>
          <div id="a_msg">{a_msg}</div>
          <div>
            <label>Weight (ibs): </label>
            <br />
            <input type="text" name="" id=""
              onChange={(e) => { setWeight(e.target.value); }}
              placeholder="Enter Your Weight" />
          </div>
          <div>
            <label>Height (in): </label>
            <br />
            <input type="text" name="" id=""
              onChange={(e) => { setHeight(e.target.value); }}
              placeholder="Enter Your Height" />
          </div>
          <div className="btns">
            <button type="submit">SUBMIT</button>
            <button type="button" 
            onClick= {(e) => {  }}>RELOAD</button>
          </div>
          <div className="result">
            <p>Your BMI report is: {Ans}</p>
            <p id="msg">{msg}</p>
          </div>
        </form>
      </div>
    </>
  )
}

export default App