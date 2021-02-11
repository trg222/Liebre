const express = require('express');
const app = express ();
const path = require ('path');

app.set ("puerto", process.env.PORT);
app.get ("/", (req, res) => {
    res.sendFile (path.resolve(__dirname, "./views/home.html"))
}) 

app.get('/signup', function (req,res){
    res.sendFile(path.resolve(__dirname, './views/register.html'))
    
})

app.get('/login', function (req,res){
    res.sendFile(path.resolve(__dirname, './views/login.html'))
    }) 

    app.use (express.static('public'));
app.listen (app.set('puerto', process.env.PORT), ()=> console.log(`Servidor corriendo de manera satisfactoria  ${app.get('puerto')}` ));





