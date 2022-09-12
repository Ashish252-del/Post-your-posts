// code for connection detabase
const mongoose = require("mongoose");
const detabaseconnection = async () => {
    try {
        // "mongodb://localhost:27017/myfirstdatabase"
        await mongoose.connect("mongodb://localhost:27017/appcontent")
        console.log("detabase is connected");
    }
    catch (e) {
        console.log(e.message);
    }
};
module.exports = detabaseconnection;