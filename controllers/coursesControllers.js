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
    if (!course) {
      const err = new Error("Course not found");
      err.status = 404;
      return next(err);
    }
    res.json(course);
  } catch (error) {
    const err = new Error("Server Error");
    err.status = 500;
    return next(err);
  }
};

//create course Controller

export const createCourse = async (req, res, next) => {
  const sentData = req.body;
  console.log(sentData);
  if (!sentData.lecturer || !sentData.courseCode || !sentData.courseTitle) {
    const err = new Error(
      "Lecturer, coursecode and courseTitle must be specified"
    );
    err.status = 404;
    next(err);
  }

  try {
    const newCourse = await Courses.create(sentData);

    res.json(newCourse);
  } catch (error) {
    const err = new Error("Server Error");
    err.status = 500;
    next(err);
  }
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
    const err = new Error("Server Error");
    err.status = 500;
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
    const err = new Error("An error occurred");
    err.status = 404;
    next(err);
  }
};
