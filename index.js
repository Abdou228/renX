const express=require('express')
const app=express();
app.use('/',(req,res)=>{
    res.send('<h1>welcom deploy succes</h2>');
})
app.listen('3002');