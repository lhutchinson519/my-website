

var toEmail="";
var fromWho="";
var text="";

toEmail=$("#user_mail")
fromWho =$("#name_input")
text=$("#user_message_input")


// 'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'lhutchinson@smu.edu',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'lhutchinson@smu.edu',
        pass: 'Blakey88$'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: toEmail, // sender address
    to: 'lhutchinson@smu.edu', // list of receivers
    subject: 'Hello!', // Subject line
    text: text, // plain text body
    html: '' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});