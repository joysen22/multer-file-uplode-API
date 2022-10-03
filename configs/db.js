const mongoose = require("mongoose");
const url = process.env.DB_URL;
const dbConnection = async () => {
  try {
    await mongoose.connect(url);
    console.log(`Database connect success }`);
  } catch (error) {
    console.log(url);
    console.log(error);
  }
};
module.exports = dbConnection;
