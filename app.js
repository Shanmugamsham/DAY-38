const express=require("express")
const data=require("./routers/alldata")
const app=express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded())
app.use(data)

app.listen(3005,()=>console.log("http://localhost:3005"))

