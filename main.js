const buttons = document.querySelectorAll(".button");
const preoutput = document.querySelector(".output__preresult");
const output = document.querySelector(".output__result");
let num1 = "";
let num2 = "";
let operator = "";
let result = 0;
let secondNumEntered = false;
console.log(num1.length);
function firstNum() {
  preoutput.textContent = `${result}`;
  output.textContent = `${result}`;
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.dataset.value;

      if (!isNaN(parseInt(value))) {
        if (!operator) {
          num1 += value;
          preoutput.textContent = num1;
        } else {
          if (!secondNumEntered) {
            num2 = "";
            secondNumEntered = true;
          }
          if (result !== 0) {
            num1 = `${result}`;
          }
          num2 += value;
          secondNumEntered = false;
          preoutput.textContent = num2;
        }
      } else {
        if (value === "=") {
          calculate();
        } else {
          operator = value;
          preoutput.textContent = `${value}`;
        }
      }
    });
  });
}

function calculate() {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  switch (operator) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n1 / n2;
      break;

    default:
      result = "Invalid operation";
      break;
  }

  output.textContent = result.toFixed(3);
}

window.addEventListener("load", firstNum());
