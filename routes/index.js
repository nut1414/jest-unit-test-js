const express = require('express')
const utilRoute = require('./util.js')

const router = express.Router()

router.use('/util', utilRoute)

module.exports = router
