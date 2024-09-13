// import { find, findAll, update, remove } from "../models/coursesModels.js";
import Courses from "../models/coursesModels.js";

//get all courses

export const getCourses = async (req, res) => {
  const courses = await Courses.find({});
  res.json(courses);
};

//get specific course
export const getCourse = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const course = await Courses.findById(courseId);
    res.json(course);
  } catch (error) {
    const err = new Error(error);
    err.status = 404;
    return next(err);
  }
};

//create course Controller

export const createCourse = async (req, res, next) => {
  const courseSent = req.body;
  const newCourse = await Courses.create(courseSent);

  res.json(newCourse);
};

//Update course handler

export const updateCourse = async (req, res, next) => {
  const courseId = req.params.id;
  const sentData = req.body;
  try {
    const updatedCourse = await Courses.findByIdAndUpdate(courseId, sentData, {
      new: true,
    });
    res.json(updatedCourse);
  } catch (error) {
    const err = new Error(error);
    err.status = 404;
    next(err);
  }
};

//delete course handler

export const deleteCourse = async (req, res, next) => {
  const courseId = req.params.id;
  try {
    await Courses.findByIdAndDelete(courseId);
    res.send("Course successfully deleted");
  } catch (error) {
    const err = new Error(error);
    err.status = 404;
    next(err);
  }
};
