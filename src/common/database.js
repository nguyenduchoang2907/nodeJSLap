const mongoose = require("mongoose");
module.exports = () => {
    mongoose
    .connect("mongodb://127.0.0.1:27017/db_shop_project")
    .then(() => console.log("Connected!"));
    return mongoose;
};