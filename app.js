const express = require('express')
const app = express()
const port = 5000;
const mongoose = require("mongoose")
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const SaveInformation = require("./models/articleSchema");



app.get('/', (req, res) => {
//   res.sendFile("/welcom.ejs", {root: __dirname})
console.log(" send data is seccessfully ")
res.render('welcom', { } )
})





// ------------------ post ------------------------

 
// app.post("/", (req, res) => {
//   const saveInformation = new SaveInformation(req.body);

//   saveInformation
//     .save()
//     .then( result => {
//       res.redirect("/");
//     })
//     .catch( err => {
//       console.log(err);
//     });
// });
app.post("/", (req, res) => {
  const saveInformation = new SaveInformation(req.body);

  saveInformation
    .save()
    .then(result => {
      // Send a success message to the client
      res.send(`
        <script>
          alert("  تم إرسال معلوماتك بنجاح!");
          window.location.href = "/";
        </script>
      `);
    })
    .catch(err => {
      console.log(err);
      // Send an error message to the client
      res.send(`
        <script>
          alert(" سنراسلك في اقرب وقت  \n  تم إرسال معلوماتك بنجاح!");
          window.location.href = "/";
        </script>
      `);
    });
});







// ------------------  connect with data base ---------------
mongoose.connect("mongodb+srv://zobaida:Lazhar123123@zobaida.sqkkx.mongodb.net/?retryWrites=true&w=majority&appName=zobaida")
.then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`)
      });
 })
 .catch((err) => {
   console.log(err);
 }); 

