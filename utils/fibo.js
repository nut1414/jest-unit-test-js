const fibo = (n) => {
  let a = 1
  let b = 1
  let c = a
  for (n; n > 1; n--) {
    c = b
    b = a + b
    a = c
  }
  return a
}

module.exports = fibo
