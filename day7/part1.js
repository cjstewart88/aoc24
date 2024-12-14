const fs = require('fs');

const data = fs.readFileSync('day7/input.txt', 'utf8').replace(/\r/g,'').split('\n\n')
let equations = data[0].split('\n')

// always evaluated left-to-right, not according to precedence rules
// add (+) and multiply (*) only

function generateEquations(equationWithoutOps, operators) {
  const helper = (currentIndex, currentEquation) => {
    // If we have added all numbers, return the equation
    if (currentIndex === equationWithoutOps.length) {
      return [currentEquation];
    }

    // Generate equations by appending each operator
    const equations = [];
    for (const operator of operators) {
      equations.push(
        ...helper(
          currentIndex + 1,
          `${currentEquation}${operator}${equationWithoutOps[currentIndex]}`
        )
      );
    }
    return equations;
  };

  // Start recursion from the second element (index 1)
  return helper(1, equationWithoutOps[0]);
}

const equationsToTest = {};
equations.forEach((e) => {
  let [value, equationWithoutOps] = e.split(': ');
  value = Number(value);
  equationWithoutOps = equationWithoutOps.split(' ').map(n => Number(n));

  // asked ai for help start
  const operators = ['+', '*'];
  const allEquations = generateEquations(equationWithoutOps, operators);
  equationsToTest[value] = allEquations;
  // asked ai for help start end
});

const acceptedValues = []
for (const value in equationsToTest) {
  const equations = equationsToTest[value]
  for (let index = 0; index < equations.length; index++) {
    const problemSplitUp = equations[index].split(/([+*])/)

    let runningValue
    let operator

    problemSplitUp.forEach((part) => {
      if (part === '+') {
        operator = part
      } else if (part === '*') {
        operator = part
      } else {
        if (!runningValue) {
          runningValue = Number(part)
        } else if (operator === '+') {
          runningValue = runningValue + Number(part)
        } else {
          runningValue = runningValue * Number(part)
        }
      }
    })

    if (runningValue === Number(value)) {
      acceptedValues.push(Number(value))
      break;
    }
  }
}

console.log(acceptedValues.reduce((acc, next) => acc+=next, 0))