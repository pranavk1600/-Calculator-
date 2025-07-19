let display = document.querySelector('.display');
let expression = "";
function changeTextValue(value) {
  expression += value;
  display.textContent = expression;
}
function addOperator(op) {
  expression += op;
  display.textContent = expression;
}
function clearDisplay() {
  expression = "";
  display.textContent = "0";
}
function calculate() {
  let result = eval(expression); 
  display.textContent = result;
  expression = result.toString();
}
