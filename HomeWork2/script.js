

const number1 = parseFloat(prompt("Enter thefirst number: "));
const op = prompt("Enter operator ( +, -, * or / ): ");
const number2 = parseFloat(prompt("Enter second number: "));

let result;

if (op == "+") {
  result = number1 + number2;
} else if (op == "-") {
  result = number1 - number2;
} else if (op == "*") {
  result = number1 * number2;
} else {
  result = number1 / number2;
}

document.write(`${number1} ${op} ${number2} = ${result}`);

