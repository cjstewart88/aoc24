const fs = require('fs');

const data = fs.readFileSync('day3/input.txt', 'utf8');

const matches = data.match(/mul\(\d+,\d+\)|don't\(\)|do\(\)/g)

let total = 0
let disabled = false;
matches.forEach(match => {
  console.log(match)
  if (match[0] === 'm' && !disabled) {
    numbers = match.match(/\d+/g).map(n => parseInt(n))
    total += numbers[0] * numbers[1]
  } else if (match === 'do()') {
    disabled = false
  } else {
    disabled = true
  }
});

console.log(total)