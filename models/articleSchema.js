const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const articleSchema = new Schema({
  name: String,
  gmail: String,
  phone: String,
  choix: String,
  annee: String,
  knowledge: String,

});
 
 
// Create a model based on that schema
const saveInformation = mongoose.model("informations-clubs-Power", articleSchema);
 
 
// export the model
module.exports = saveInformation;