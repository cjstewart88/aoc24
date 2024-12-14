const fs = require('fs');

const data = fs.readFileSync('day5/input.txt', 'utf8').replace(/\r/g,'').split('\n\n')
const rules = data[0].split('\n')
const pagesToProduce = data[1].split('\n')

const order = [];
rules.forEach((rule) => {
  const r = rule.split('|').map(Number)
  const numExist = order.indexOf(r[1]);
  if (numExist) {
    order.splice(numExist, 0, r[0]);
  } else {
    order.push(r[0])
  }
})
const dedupedOrder = [...new Set(order.flat())]

producedPages = []
pagesToProduce.forEach((pages) => {
  pages = pages.split(',').map(Number)

  let valid = false;
  pages.forEach((page) => {
    valid = false;
    const index1 = dedupedOrder.indexOf(page)

    if (index1 >= 0) {
      pages.forEach((pageCheck) => {
        const index2 = dedupedOrder.indexOf(pageCheck)

        if (index1 <= index2) {
          valid = true;
        }
      })
    }
  })

  if (valid) {
    producedPages.push(
      pages
    )
  }
})

console.log(producedPages)