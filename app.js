// console.log("Calculator attempt");

let display = document.querySelector(".display");
const calcBody = document.querySelector(".calc-body");
// all btns selection
const btns = [...document.querySelectorAll(".btn")];
console.log(display);
console.log(btns);
console.log(calcBody);

// functionality
btns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    // console.log("click");
    //
    let displayValue = display.textContent;
    console.log(displayValue);
    const dataBtn = e.target.dataset.id;
    // value of pressed btn
    let keyValue = e.target.textContent;
    console.log(keyValue);
    // setup flags in order to determine when an operand was pressed
    let operatorPressed = false;
    let resultPressed = false;
    // first and second value variables

    if (dataBtn === "add") {
      btnPress(e.target);
      console.log("add function");
      item.dataset.prevOperator = "operatorKey";
      console.log(item);
      operatorPressed = true;
    }

    if (dataBtn === "minus") {
      btnPress(e.target);
      console.log("minus function");
      item.dataset.prevOperator = "operatorKey";
      operatorPressed = true;
    }

    if (dataBtn === "multiply") {
      btnPress(e.target);
      console.log("multiply function");
      item.dataset.prevOperator = "operatorKey";
      operatorPressed = true;
    }

    if (dataBtn === "divide") {
      btnPress(e.target);
      console.log("divide function");
      item.dataset.prevOperator = "operatorKey";
      operatorPressed = true;
    }

    if (dataBtn === "decimal") {
      btnPress(e.target);
      console.log("decimal btn clicked");
      display.textContent = displayValue + ".";
    }

    if (dataBtn === "clear") {
      btnPress(e.target);
      console.log("all clear");
    }

    if (dataBtn === "result") {
      btnPress(e.target);
      console.log("equal operator btn");
      resultPressed = true;
    }

    if (e.target.classList.contains("btn-number")) {
      btnPress(e.target);
      console.log("btn number was clicked");

      // display pressed key value on display
      if (display.textContent == "0") {
        display.textContent = keyValue;
        // string concatenation in order to add multiple numbers to the display
      } else {
        display.textContent = displayValue + keyValue;
      }
    }

    // store first value in calc body as dataset when operand pressed
    if (operatorPressed) {
      let operatorType = e.target.dataset.id;
      calcBody.dataset.currentOperator = operatorType;
      console.log(operatorType);
      let firstValue = (calcBody.dataset.firstValue = displayValue);
      console.log(firstValue);
      // let firstValue = display.textContent;
      display.textContent = "0";
    }
    // store second value in calc body as dataset
    if (resultPressed) {
      let secondValue = (calcBody.dataset.secondValue = displayValue);
      console.log(secondValue);
    }
    // access first and second values from calc body dataset
    let firstVal = parseFloat(calcBody.dataset.firstValue);
    let secondVal = parseFloat(calcBody.dataset.secondValue);
    console.log(firstVal, secondVal);
    console.log(typeof (firstVal, secondVal));
    // result functionality
    if (e.target.classList.contains("btn-equal")) {
      console.log("result btn clicked");
      // access the operand value stored in the calc body dataset
      let usedOperator = calcBody.dataset.currentOperator;
      console.log(usedOperator);
      // calculate and display the result
      let calcResult = calculate(firstVal, usedOperator, secondVal);
      console.log(calcResult);
      display.textContent = calcResult;
    }

    if (e.target.classList.contains("btn-clear")) {
      display.textContent = "0";
      firstVal = 0;
      secondVal = 0;
    }
  });
});

// button press CSS effect
function btnPress(btn) {
  btn.classList.add("is-pressed");
}

// calculate function
function calculate(firstValue, operator, secondValue) {
  let result;

  if (operator === "add") {
    result = firstValue + secondValue;
  } else if (operator === "minus") {
    result = firstValue - secondValue;
  } else if (operator === "multiply") {
    result = firstValue * secondValue;
  } else if (operator === "divide") {
    result = firstValue / secondValue;
  }

  return result;
}

// function testing
firstVal = 89;
secondVal = 25;
operandAdd = "add";

const calculateTest = calculate(firstVal, operandAdd, secondVal);
const calculateTest2 = calculate(75, "minus", 35);

console.log(calculateTest, calculateTest2);
