const buttons = document.querySelectorAll(".button");
const preoutput = document.querySelector(".output__preresult");
const output = document.querySelector(".output__result");
let num1 = [];
let num2 = [];
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
          num1.push(value);
          preoutput.textContent = num1.join("");
        } else {
          if (!secondNumEntered) {
            num2 = [];
            secondNumEntered = true;
          }
          if (result !== 0) {
            num1 = [];
            num1.push(`${result}`);
          }
          num2.push(value);

          preoutput.textContent = num2.join("");
        }
      } else {
        if (value === "=") {
          secondNumEntered = false;
          calculate();
        } else {
          secondNumEntered = false;
          operator = value;
          preoutput.textContent = `${value}`;
        }
      }
    });
  });
}

function calculate() {
  const n1 = parseFloat(num1.join(""));
  const n2 = parseFloat(num2.join(""));

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
