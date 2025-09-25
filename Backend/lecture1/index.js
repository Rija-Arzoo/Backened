require('dotenv').config()
const express =require ('express')
const app=express()
const port=8500 
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/login',(req,res)=>{
    res.send("<h1>you are on login page</h1>")
})


app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})
