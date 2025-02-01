const express = require('express')
const app = express()
const port = 5000;
const mongoose = require("mongoose")
app.set('view engine', 'ejs')
app.use(express.static("public"));

app.get('/', (req, res) => {
//   res.sendFile("/welcom.ejs", {root: __dirname})
res.render('welcom', { } )
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})