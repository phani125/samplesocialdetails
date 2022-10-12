const express = require('express');
var format = require('date-format');
const app = express();

app.get("/", (req,res) => {
    res.status(200).send("Welcome to user data page");
});

app.get("/api/v1/:token/*/:tokens", (req,res) =>{
    res.status(200).json({invalidparams : req.params.token, invaildturl : req.originalUrl });
} );

app.get("/api/v1/:token", (req,res) =>{
    res.status(200).json({invalidparams : req.params.token, invalidturl : req.originalUrl });
} )


app.get('/api/v1/instagram', (req,res) => {

    const instfol = {
        name: 'sai',
        followers: '1',
        following : '1',
        date : format.asString("dd-MM-yyyy - hh:mm:ss", new Date())
    }
    res.json(instfol)
});

app.get('/api/v1/Linkdin', (req,res) => {
    const lkdnfol = {
        name: 'sai',
        followers: '1',
        following : '1',
        date : format.asString('hh:mm:ss', new Date())
    }
    res.json(lkdnfol)
});

app.get('/api/v1/facebook', (req,res) => {
    const fbfol = {
        name: 'sai',
        followers: '1',
        following : '1',
        date : format.asString('hh:mm:ss', new Date())
    }
    res.json(fbfol)
});

app.listen(3000, ()=> console.log("App is running at 3000"));
