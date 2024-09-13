import mongoose from "mongoose";

const CoursesSchema = new mongoose.Schema({
  id: String,
  courseCode: String,
  courseTitle: String,
  lecturer: String,
  numberOfStudents: {
    type: Number,
    default: 0,
  },
  compulsory: {
    type: Boolean,
    default: false,
  },
});

const Courses = mongoose.model("Courses", CoursesSchema);
export default Courses;
