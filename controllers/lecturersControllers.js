import Lecturers from "../models/lecturersModel.js";

export const getLecturers = async (req, res) => {
  const lecturers = await Lecturers.find();
  res.json(lecturers);
};

export const getLecturerById = async (req, res, next) => {
  const lecturerId = req.params.id;
  try {
    const lecturer = await Lecturers.findById(lecturerId);
    res.json(lecturer);
  } catch (err) {
    const error = new Error(err);
    error.status = 404;
    return next(error);
  }
};

export const createLecturer = async (req, res, next) => {
  const sentData = req.body;
  try {
    const newLecturer = Lecturers.create(sentData);
    res.json(newLecturer);
  } catch (err) {
    const error = new Error(err);
    error.status = 404;
    return next(error);
  }
};

export const updateLecturer = async (req, res, next) => {
  const id = req.params.id;
  const sentData = req.body;
  try {
    const updatedLecturer = await Lecturers.findByIdAndUpdate(id, sentData);
    res.json(updatedLecturer);
  } catch (err) {
    const error = new Error(err);
    error.status = 404;
    return next(error);
  }
};

export const deleteLecturer = async (req, res, next) => {
  const lectureId = req.params.id;
  try {
    const deleteMessage = await Lecturers.findByIdAndDelete(lectureId);
    res.send(deleteMessage);
  } catch (err) {
    const error = new Error(err);
    error.status = 404;
    return next(error);
  }
};
