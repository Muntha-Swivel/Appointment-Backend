import AppointmentModel from "../models/appointment.model";
import { iAppointment } from "../models/appointment.model";
import log from "../utils/logger";

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
  const { _id, time, confirmed } = appointment;

  try {
    const update = await AppointmentModel.findByIdAndUpdate(_id, {
      time: time,
      confirmed: confirmed,
    });
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
