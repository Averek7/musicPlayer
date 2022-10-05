require("dotenv").config("./.env");
const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/MusicPlayer?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    });
    console.log("DB Connected");
  } catch (err) {
    console.log(`error : ${err.message}`);
  }
};

module.exports = connectDB;
