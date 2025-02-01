const express = require('express')
const app = express()
const port = 5000;

app.get('/', (req, res) => {
  res.sendFile("./views/welcom.html", {root: __dirname})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})