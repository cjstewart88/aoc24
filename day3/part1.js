const fs = require('fs');

const data = fs.readFileSync('day3/input.txt', 'utf8');

const matches = data.match(/mul\(\d+,\d+\)/g)

let total = 0
matches.forEach(match => {
  numbers = match.match(/\d+/g).map(n => parseInt(n))
  total += numbers[0] * numbers[1]
});

console.log(total)