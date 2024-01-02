import React from 'react'
import './Calculator.css'
function Calculator() {
  return (
    <div>
      <h1><div className='hi'>Calculator</div></h1>
     <div class="calculator">
  <input type="text" class="display" disabled></input>
  <div class="keys">
    <button onclick="addToDisplay('7')">7</button>
    <button onclick="addToDisplay('8')">8</button>
    <button onclick="addToDisplay('9')">9</button>
    <button onclick="addToDisplay('+')">+</button>
    <button onclick="addToDisplay('4')">4</button>
    <button onclick="addToDisplay('5')">5</button>
    <button onclick="addToDisplay('6')">6</button>
    <button onclick="addToDisplay('-')">-</button>
    <button onclick="addToDisplay('1')">1</button>
    <button onclick="addToDisplay('2')">2</button>
    <button onclick="addToDisplay('3')">3</button>
    <button onclick="addToDisplay('')"></button>
    <button onclick="addToDisplay('0')">0</button>
    <button onclick="clearDisplay()">C</button>
    <button onclick="calculate()">=</button>
    <button onclick="addToDisplay('/')">/</button>
  </div>
</div>

    </div>
  )
}

export default Calculator