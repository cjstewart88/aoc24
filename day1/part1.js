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

column1.sort()
column2.sort()

const distances = [];
column1.map((n, i) => {
    if (n > column2[i]) {
        distances.push(n - column2[i])
    } else {
        distances.push(column2[i] - n)
    }
})

console.log(distances.reduce((accumulator, currentValue) => accumulator + currentValue, 0))