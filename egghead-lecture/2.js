const Box = x => 
({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

// const moneyToFloat = str =>
//   parseFloat(str.replace(/\$/g, ''))

// refactor code above with Box using composition
const moneyToFloat = str =>
  Box(str)
    .map(s => s.replace(/\$/g, ''))
    .map(r => parseFloat(r)) // keep result in the Box in order to use in applyDiscount

// const percentToFloat = str => {
//   const replaced = str.replace(/\%/g, '')
//   const parced = parseFloat(replaced)
//   return parced * 0.01
// }

//refactor with composition & Box
const percentToFloat = str => 
  Box(str.replace(/\%/g, ''))
    .map(replaced => parseFloat(replaced))
    .map(number => number * 0.01) // keep result in the Box in order to use in applyDiscount


// const applyDiscount = (price, discount) => {
//   const cost = moneyToFloat(price)
//   const saving = percentToFloat(discount)
//   return cost - cost*saving
// }

// final refactor 
const applyDiscount = (price, discount) =>
  moneyToFloat(price)
    .fold(cost =>
      percentToFloat(discount)
        .fold(saving => 
          cost - cost*saving))


const result = applyDiscount("5.00$", "20%")
console.log(result)