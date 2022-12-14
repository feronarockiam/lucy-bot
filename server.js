const express = require('express')
const app = express()
const path = require('path');
const bodyparser = require('body-parser')
const axios = require('axios')

app.use(bodyparser.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('views'));
app.use(express.static('assets'));
//app.use(express.static)
const port = process.env.PORT || 3000
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})

app.get('/admin',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/welcome.html'))
})
app.get('/homepage',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/homepage_1.html'))
})

app.get('/delete/:id',async (req,res)=>{
    const data=await axios.delete('https://638f5b8c4ddca317d7f644f9.mockapi.io/form_pg/'+req.params.id)
    //console.log(data)
    console.log(req.params.id)
    res.redirect('/views/welcome.html')
})



const admin = require('./routes/admin')
app.use('/',admin)
app.listen(port,()=>{
    console.log('listening to server 3000');
})