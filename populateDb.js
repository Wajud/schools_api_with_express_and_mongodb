import courses from "./data/courses.json" assert { type: "json" };
import lecturers from "./data/lecturers.json" assert { type: "json" };
import extracurriculars from "./data/extracurriculars.json" assert { type: "json" };

import mongoose from "mongoose";
import dotenv from "dotenv";
import Courses from "./models/coursesModels.js";
import Lecturers from "./models/lecturersModel.js";
import ExtraCurriculars from "./models/extrasModels.js";

dotenv.config();

const writeToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Courses.create(courses);
    await Lecturers.create(lecturers);
    await ExtraCurriculars.create(extracurriculars);
    console.log("Successfully written the courses to the database");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

writeToDB();
