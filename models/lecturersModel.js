import mongoose from "mongoose";

const lecturersSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  coursesTaken: Array,
  levelsTaken: {
    type: Number,
    default: 0,
  },
});

const Lecturers = mongoose.model("Lecturers", lecturersSchema);
export default Lecturers;
