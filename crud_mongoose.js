const mongoose = require("mongoose");
const budgetModel = require("./models/myBudget_schema");

let url = "mongodb://localhost:27017/Budget";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database");
    budgetModel
      .find({})
      .then((data) => {
        console.log(data);
        mongoose.connection.close();
      })
      .catch((connectionError) => {
        console.log(connectionError);
      });
  })
  .catch((connectionError) => {
    console.log(connectionError);
  });

