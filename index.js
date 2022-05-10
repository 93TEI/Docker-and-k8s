const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Docker api from vscode');
});

app.listen(8080,()=>console.log('Server is running...!'));
