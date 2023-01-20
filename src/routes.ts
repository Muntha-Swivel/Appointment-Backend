import express from "express";
import {
  createAppointmentHandler,
  getAllAppointmentHandler,
  confirmAppointmentHandler,
} from "./controller/appointment.controller";

const router = express.Router();
router.get("/", getAllAppointmentHandler);
router.post("/addAppointment", createAppointmentHandler);
router.post("/confirmAppointment", confirmAppointmentHandler);

export default router;
