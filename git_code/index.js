const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>This is the Home page</h1>")
});

app.listen(3000,()=>{
    console.log("SERVER STARTED");
});