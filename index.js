const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000

app.use(express.json())
app.use(require("./routes/Drinks.route"))

mongoose.connect("mongodb+srv://into:5678aKLM@cluster0.u3moagz.mongodb.net/caffe", (err)=>{
    if(err){
        console.log(error.message)
    }
    console.log("mongoose запущен");

    app.listen(port, () => {
        console.log("сервер запущен")
    })
})