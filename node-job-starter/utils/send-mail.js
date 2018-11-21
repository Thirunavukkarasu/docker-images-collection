// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = () => {
  const msg = {
    to: 'tamilan.arasu@gmail.com',
    from: 'tamilan.arasu@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<strong>and easy to do anywhere, even with Node.js</strong>`,
  };
  sgMail.send(msg);
}


module.exports = {
  sendMail
}
