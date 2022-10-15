import sgMail from '@sendgrid/mail'

const sendgridSendMail = async (req, resp) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: '', // Change to your recipient
    from: '', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail.send(msg)
    .then((info) => {
      resp.send(info);
    }).catch((error) => console.error(error));


};

export default sendgridSendMail;
