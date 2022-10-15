import nodemaile from 'nodemailer';

const nodemailSendMail = async (req, resp) => {
  let testAcount = nodemaile.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'fredy91@ethereal.email',
      pass: 'TekkwZgK7B1MhSGVmZ'
    }
  });

  let info = await transporter.sendMail({
    from: '"Vitalii Bairak" <vitalii_b88@test.com>',
    to: 'bar@example.com, baz@example.com',
    subject: 'Hello ✔',
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  });

  resp.json(info);
}

export default nodemailSendMail;
