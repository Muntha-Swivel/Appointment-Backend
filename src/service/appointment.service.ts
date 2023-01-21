import AppointmentModel from "../models/appointment.model";
import { iAppointment } from "../models/appointment.model";
import log from "../utils/logger";
import { sendConfirmEmail } from "./email.service";

const createAppointmentService = async (appointment: iAppointment) => {
  // log.info(appointment);
  try {
    const result = await AppointmentModel.create(appointment);
    log.info("success");
    return result;
  } catch (err: any) {
    log.info(err);
  }
};
const getAllAppointmentService = async () => {
  try {
    const appointments = await AppointmentModel.find();
    return appointments;
  } catch (err: any) {
    log.info(err);
    throw err.message;
  }
};
const confirmAppointmentService = async (appointment: iAppointment) => {
  const { _id, startTime, endTime, duration, confirmed } = appointment;

  try {
    const update = await AppointmentModel.findByIdAndUpdate(_id, {
      startTime: startTime,
      endTime: endTime,
      duration: duration,
      confirmed: confirmed,
    });
    //name, number, date, time

    if (update) {
      try {
        const email = await sendConfirmEmail(
          update.name,
          update._id,
          update.date,
          update.startTime
        );
      } catch (err) {
        console.log(err);
      }
    }
    // mail();
    return update;
  } catch (err: any) {
    log.info(err);
    throw err.message;
  }
};

export {
  createAppointmentService,
  getAllAppointmentService,
  confirmAppointmentService,
};
