let num = parseInt(prompt("Please enter how many FizzBuzz numbers you want to see"));

let output = " ";
let i = 1;
while (i <= 15 * num) {
  if (i % 15 == 0) {
    output += i + " ";
  }
  i++;
}
document.write(output);
