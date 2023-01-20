import { boolean, string } from "joi";
import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";
import time from "../utils/timeFormatter";

const regex =
  /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

const currentTime = time();

export interface iAppointment {
  _id?: string;
  name: string;
  date: string;
  email: string;
  mobile: string;
  time: string;
  confirmed: boolean;
}
const AppointmentSchema = new mongoose.Schema<iAppointment>({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  date: {
    type: String,
    required: [true, "Plese enter a date"],
  },
  time: {
    type: String,
    required: [true, "Please enter a time"],
    default: currentTime,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    //    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  mobile: {
    type: String,
    required: [true, "Please enter a phone number"],
    match: [regex, "Please match the phone number"],
  },
  confirmed: {
    type: Boolean,
    required: [true, "Please give a sttus"],
    default: false,
  },
});

const AppointmentModel = mongoose.model<iAppointment>(
  "Appointment",
  AppointmentSchema
);

export default AppointmentModel;
