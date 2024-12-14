const fs = require('fs');

const data = fs.readFileSync('day4/input.txt', 'utf8');

const map = data.replace(/\r/g,'').split('\n').map(line => line.split(''))

const checkHorizontal = (x, y) => {
  if (map[y][x+1] === 'M' && map[y][x+2] === 'A' && map[y][x+3] === 'S') {
    return true
  }
}

const checkHorizontalBackwards = (x, y) => {
  if (map[y][x-1] === 'M' && map[y][x-2] === 'A' && map[y][x-3] === 'S') {
    return true
  }
}

const checkVertical = (x, y) => {
  if (map[y+1]?.[x] === 'M' && map[y+2]?.[x] === 'A' && map[y+3]?.[x] === 'S') {
    return true
  }
}

const checkVerticalBackwards = (x, y) => {
  if (map[y-1]?.[x] === 'M' && map[y-2]?.[x] === 'A' && map[y-3]?.[x] === 'S') {
    return true
  }
}

const checkDiagonalRightUp = (x, y) => {
  if (map[y-1]?.[x+1] === 'M' && map[y-2]?.[x+2] === 'A' && map[y-3]?.[x+3] === 'S') {
    return true
  }
}

const checkDiagonalRightDown = (x, y) => {
  if (map[y+1]?.[x+1] === 'M' && map[y+2]?.[x+2] === 'A' && map[y+3]?.[x+3] === 'S') {
    return true
  }
}

const checkDiagonalLeftUp = (x, y) => {
  if (map[y-1]?.[x-1] === 'M' && map[y-2]?.[x-2] === 'A' && map[y-3]?.[x-3] === 'S') {
    return true
  }
}

const checkDiagonalLeftDown = (x, y) => {
  if (map[y+1]?.[x-1] === 'M' && map[y+2]?.[x-2] === 'A' && map[y+3]?.[x-3] === 'S') {
    return true
  }
}

let count = 0;
map.forEach((row, y) => {
  row.forEach((letter, x) => {
    if (letter === 'X') {
      if (checkHorizontal(x, y)) {
        count++;
      }
      if (checkHorizontalBackwards(x, y)) {
        count++;
      }
      if (checkVertical(x, y)) {
        count++;
      }
      if (checkVerticalBackwards(x, y)) {
        count++;
      }
      if (checkDiagonalRightUp(x, y)) {
        count++;
      }
      if (checkDiagonalRightDown(x, y)) {
        count++;
      }
      if (checkDiagonalLeftUp(x, y)) {
        count++;
      }
      if (checkDiagonalLeftDown(x, y)) {
        count++;
      }
    }
  })
})

console.log(count)