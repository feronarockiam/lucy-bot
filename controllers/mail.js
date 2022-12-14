
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'feron1493@gmail.com',
      pass: ' hpvifyoutegquldm '
    }
  });
  
  var mailOptions = {
    from: 'feron1493@gmail.com',
    to: ' alanarun033@gmail.com',
    subject: 'Happy coding',
    text: `vanakam da mapla!`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 