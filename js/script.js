let firstNumber = "";
let operator = "";
let secondNumber = "";
let total = "";

const display = document.querySelector(".display");

function updateDisplayValue(num) {
  secondNumber += num;
  display.textContent = secondNumber;
}

function handleOperator(op) {
  if (total) {
    firstNumber = total;
    total = "";
  } else {
    firstNumber = secondNumber;
  }
  operator = op;
  secondNumber = "";
}

function handleDecimal() {
  if (!secondNumber.includes(".")) {
    secondNumber += "0.";
    display.textContent = secondNumber;
  }
}

function handleEqual() {
  operate();
  display.textContent = total;
  firstNumber = "";
  operator = "";
  secondNumber = "";
}

function handleClear() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  total = "";
  display.textContent = "0";
}

function operate() {
  switch (operator) {
    case "+":
      total = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      total = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      total = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      total = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    default:
      return;
  }
}

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const num = button.textContent;
    updateDisplayValue(num);
  });
});

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const op = button.textContent;
    handleOperator(op);

    if (firstNumber && operator && secondNumber) {
      operate();
    }
  });
});

const decimalButton = document.querySelector(".decimal-button");
decimalButton.addEventListener("click", handleDecimal);

const equalsButton = document.querySelector(".equals-button");
equalsButton.addEventListener("click", handleEqual);

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", handleClear);
