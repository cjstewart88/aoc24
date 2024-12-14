const fs = require('fs');

const data = fs.readFileSync('day2/input.txt', 'utf8');
const lines = data.trim().split('\n');
let validReports = 0;
lines.forEach(line => {
  const report = line.split(' ').map(Number);

  let valid = true;
  if (report[0] > report[report.length-1]) {
    // going down
    report.forEach((level, i) => {
      if (report[i+1] === undefined) {
        return
      }

      if (level > report[i+1]) {
        if (level-report[i+1] < 1 || level-report[i+1] > 3) {
          valid = false;
        }
      } else {
        valid = false;
      }
    });
  } else {
    // going up
    report.forEach((level, i) => {
      if (report[i+1] === undefined) {
        return
      }

      if (level < report[i+1]) {
        if (report[i+1]-level > 3 || report[i+1]-level < 1) {
          valid = false;
        }
      } else {
        valid = false;
      }
    });
  }

  if (valid) {
    validReports++;
  }
});

console.log(validReports)