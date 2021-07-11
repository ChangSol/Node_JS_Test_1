const nodemailer = require('nodemailer');

const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d891dbf934b3b5",
      pass: "a727abad4abcac"
    }
  };

const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        //CallBack Function
        if(error) {
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: 'ckdwnsla12@naver.com',
    to: 'ckdwnsla12@naver.com',
    subject: '메일 테스트중...',
    text: 'node js mailer Testing~'
};

send(email_data);