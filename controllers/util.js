const fibbonacci = require('../utils/fibbo.js')

const fibbo = (req, res) => {
  try {
    if (req.params.n > 102) throw Error('number too large')
    const result = { status: 'success', result: fibbonacci(req.params.n) }
    console.log(result)
    res.json(result)
  } catch (e) {
    res.json({ status: 'error', result: e.message })
  }
}

module.exports = {
  fibbo
}
