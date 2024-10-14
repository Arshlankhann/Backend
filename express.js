const express = require('express')
const app = express()
const port = 3000

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/about",(req,res)=>{
    res.send("about us")
})

app.post("/",(req,res)=>{
    console.log("You hit post request")
    res.send("hello world post")
})

app.get("/request",(req,res)=>{
    console.log("You hit index request")
    res.send("hello world index")
})

app.listen(port,()=>{
    console.log(`Example app listen on port ${port}`)
})