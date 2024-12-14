const fs = require('fs');

const data = fs.readFileSync('day1/input.txt', 'utf8');
const lines = data.trim().split('\n');

const column1 = [];
const column2 = [];

lines.forEach(line => {
  const [num1, num2] = line.split(/\s+/).map(Number);
  column1.push(num1);
  column2.push(num2);
});

const score = [];
column1.forEach((n) => {
  score.push(n*column2.filter((n2) => n2 === n).length)
})

console.log(score.reduce((accumulator, currentValue) => accumulator + currentValue, 0))