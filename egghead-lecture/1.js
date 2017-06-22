// const nextCharForNumberString = str => {
// const trimmed = str.trim()
// const number = parseInt(trimmed)
// const nextNumber = number + 1
// return String.fromCharCode(nextNumber)

// }

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

const nextCharForNumberString = str =>
  // return String.fromCharCode(parseInt(str.trim())+1) // very confusing line of code ;)
  Box(str)
    .map(s => s.trim())
    .map(f => parseInt(f))
    .map(n => n + 1)
    .map(r => String.fromCharCode(r))
    .fold(c => c.toLowerCase())

const result = nextCharForNumberString("  64  ");
console.log(result);
