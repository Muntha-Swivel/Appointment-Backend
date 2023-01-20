import { Request, Response } from "express";
import log from "../utils/logger";
import {
  createAppointmentService,
  getAllAppointmentService,
  confirmAppointmentService,
} from "../service/appointment.service";

const createAppointmentHandler = async (req: Request, res: Response) => {
  try {
    const newAppointment = await createAppointmentService(req.body);
    return res.status(200).json({ message: "success" });
  } catch (err: any) {
    return res.status(400).json({ status: "error", message: err });
  }
};
const getAllAppointmentHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllAppointmentService();
    res.status(200).json({ appointments: result, message: "success" });
  } catch (err) {
    log.info(err);
    res.status(400).json({ status: "error", message: err });
  }
};
const confirmAppointmentHandler = async (req: Request, res: Response) => {
  try {
    const result = await confirmAppointmentService(req.body);
    return res.status(200).json({ message: "success" });
  } catch (err) {
    return res.status(400).json({ status: "error", message: err });
  }
};

export {
  createAppointmentHandler,
  getAllAppointmentHandler,
  confirmAppointmentHandler,
};
