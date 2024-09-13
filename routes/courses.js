import express from "express";
import {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
} from "../controllers/coursesControllers.js";

export const coursesRouter = express.Router();

//Get all courses
coursesRouter.get("/", getCourses);

//get specific course
coursesRouter.get("/:id", getCourse);

//create new course
coursesRouter.post("/", createCourse);

//update a course
coursesRouter.patch("/:id", updateCourse);

//delete a course
coursesRouter.delete("/:id", deleteCourse);
