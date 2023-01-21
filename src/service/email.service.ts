import nodemailer from "nodemailer";
import config from "config";
import confirmEmailTemplate from "../templates/confirmEmail";
import log from "../utils/logger";
//name, number, date, time
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: config.get<string>("email"), // generated ethereal user
    pass: config.get<string>("emailPassword"), // generated ethereal password
  },
});

const sendConfirmEmail = async (
  name: string,
  number: string,
  date: string,
  time: string
) => {
  const html = confirmEmailTemplate(name, number, date, time);

  try {
    let send = await transporter.sendMail({
      from: config.get<string>("email"), // sender address
      to: "cejawag490@ukbob.com", // list of receivers
      subject: "Appointment Confirmation", // Subject line
      text: "Hello world?", // plain text body
      html: html, // html body
    });
    log.info("mail sent successfully");
  } catch (err) {
    log.info(err);
    throw err;
  }
};
export { sendConfirmEmail };
