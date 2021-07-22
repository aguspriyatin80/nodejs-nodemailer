const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();

// Gmail account info
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Email info
// const mailOptions = {
//     from: 'aguspriyatin80@gmail.com',
//     to: 'sihayati@gmail.com',
//     subject: 'How to send emails using NodeJS',
//     text: 'Follow the instructions and you will be fine'
// };
// jika menggunakan lampiran
const mailOptions = {
    from: 'aguspriyatin80@gmail.com',
    to: 'sihayati@gmail.com',
    // cc: 'lexus@gmail.com',
    // bcc: 'sugar@gmail.com',
    subject: 'How to send emails using NodeJS with ATTACHMENT',
    text: 'Follow the instructions and you will be fine',
    attachments: [{
    filename: "logo.png", path: "./img/logo.png"}]
};
// Send email 📧  and retrieve server response
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});