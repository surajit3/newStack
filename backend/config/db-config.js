const mongoose = require("mongoose");

class DBconfig {
  static connect = async (DATABASE_URL) => {
    const options = {
      dbName: "user_auth",
    };
    await mongoose.connect(DATABASE_URL, options, (error) => {
      if (error) console.log(error);
      else console.log("Database Connected...");
    });
  }
}

module.exports = DBconfig;
