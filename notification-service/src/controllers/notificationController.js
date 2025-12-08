// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST,
//   port: process.env.EMAIL_PORT,
//   secure: false, // TLS
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// exports.sendNotification = async (req, res) => {
//   try {
//     const { to, subject, text } = req.body;

//     const info = await transporter.sendMail({
//       from: `"Home Service App" <${process.env.EMAIL_USER}>`,
//       to,
//       subject,
//       text,
//     });

//     res.status(200).json({
//       message: "Email sent successfully 🚀",
//       previewURL: nodemailer.getTestMessageUrl(info), // Ethereal preview link
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

require("dotenv").config(); 
const nodemailer = require("nodemailer");

// Setup Ethereal transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendNotification = async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    const info = await transporter.sendMail({
      from: `"Home Service App" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });

    res.status(200).json({
      message: "Email sent successfully 🚀",
      previewURL: nodemailer.getTestMessageUrl(info),
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: error.message });
  }
};
