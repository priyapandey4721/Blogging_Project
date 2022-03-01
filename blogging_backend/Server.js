const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require('dotenv').config()
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const connectDB = require("./Config/db");
connectDB();

const router = require("./Routes/posts");
app.use("/api/posts/", router);

app.listen(PORT,(err)=>{
    if(err) throw err
    else{
        console.log(`Server is running on port : ${PORT}`)
    }

})