const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World! ')
})
app.post("/",(req,res)=>{
    console.log("You hit post request")
    res.send("hello world post")
})
app.get("/index",(req,res)=>{
    console.log("You hit post request")
    res.sendFile('templates/request.html',{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})