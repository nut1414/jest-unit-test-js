require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./routes')

const PORT = process.env.PORT || 8080

app.use('/api', routes)

app.listen(PORT, () => {
  console.log('Server is running on ' + PORT)
})
