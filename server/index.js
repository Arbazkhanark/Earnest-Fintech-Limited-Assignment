const express=require("express");
const dbConnection = require("./database");
const bodyParser =require("body-parser");
const cors=require("cors")
require("dotenv").config();

const app=express();
dbConnection()
app.use(cors({
    credentials:true,
    origin:["http://localhost:5173","http://localhost:5174"]
}));


app.use(express.json())
app.use(bodyParser.json());
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
      res.status(400).send({ success: false, error: "Invalid JSON" });
    } else {
      next();
    }
  });


app.use(require("./routers/router"))



app.listen(process.env.PORT,()=>console.log(`Server is running ${process.env.PORT}`));