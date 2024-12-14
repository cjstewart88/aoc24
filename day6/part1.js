const fs = require('fs');

const data = fs.readFileSync('day6/input.txt', 'utf8').replace(/\r/g,'').split('\n\n')
let level = data[0].split('\n')
level = level.map((row) => row.split('')) 

const guard = {
  x: null,
  y: null
}

const getGuardPos = () => {
  level.forEach((row, i) =>{
    row.forEach((node, ii) => {
      if (node === '^') {
        level[i][ii] = '.'
        guard.x = ii
        guard.y = i
        guard.facingDirection = 'up'
        guard.patrolFinished = false;
      }
    })
  })
}

getGuardPos();

let nodesVisited = []; // ['3,4','2,0']
const patrol = () => {
  let nextNode;

  if (guard.patrolFinished) {
    console.log(`finished. ${nodesVisited.length} distinct nodes visited`)
    console.log()
    return;
  }
  
  if (nodesVisited.indexOf(`${guard.x},${guard.y}`) === -1) {
    nodesVisited.push(`${guard.x},${guard.y}`)
  }

  switch (guard.facingDirection) {
    case 'up':
      nextNode = level[guard.y-1]?.[guard.x];
      if (nextNode === '.') {
        guard.y -= 1
      } else if (nextNode === '#') {
        guard.facingDirection = 'right';
      } else {
        guard.patrolFinished = true;
      }
      break;
    case 'down':
      nextNode = level[guard.y+1]?.[guard.x]
      if (nextNode === '.') {
        guard.y += 1
      } else if (nextNode === '#') {
        guard.facingDirection = 'left'
      } else {
        guard.patrolFinished = true;
      }
      break;
    case 'left':
      nextNode = level[guard.y]?.[guard.x-1]
      if (nextNode === '.') {
        guard.x -= 1
      } else if (nextNode === '#') {
        guard.facingDirection = 'up'
      } else {
        guard.patrolFinished = true;
      }
      break;
    case 'right':
      nextNode = level[guard.y]?.[guard.x+1]
      if (nextNode === '.') {
        guard.x += 1
      } else if (nextNode === '#') {
        guard.facingDirection = 'down'
      } else {
        guard.patrolFinished = true;
      }
      break;
  }

  patrol()
}

patrol();