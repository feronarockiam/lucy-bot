const routes = require('express').Router();
var nodemailer = require('nodemailer');
const axios=require('axios')

routes.post('/adminLogin',(req,res)=>{
    if(req.body.name === 'admin' && req.body.password === '12345'){
        res.status(200).json({data :"Login Successful"})

    }
    else if(req.body.name === 'null'){
        res.status(404).json({data:"err"})
    }
    else{
        res.redirect('/login'); 
    }
})

routes.get('/sendMail/:email/:text',(req,res)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'teamlucy2022@gmail.com',
          pass: ' rvzqvqsgdhmswjxi '
        }
      });
      
      var mailOptions = {
        from: 'teamlucy2022@gmail.com',
        to: req.params.email,
        subject: 'REGARDING ENROLLMENT IN COLLEGE',
        text: req.params.text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({data:"Success"})
        }
      }); 
})
module.exports=routes;