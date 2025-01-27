const express = require('express')
const app = express()
const port = 3000

require('dotenv').config()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login' , (req , res) =>{
    res.send("Login route") ;
})
app.get('/sign' , (req , res) =>{
    res.send("sign route") ;
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
  