import ExtraCurriculars from "../models/extrasModels.js";

export const getAllExtraCurriculars = async (req, res) => {
  const extraCurriculars = await ExtraCurriculars.find({});
  res.json(extraCurriculars);
};

export const getExtraCurricular = async (req, res, next) => {
  const extrasId = req.params.id;
  try {
    const activity = await ExtraCurriculars.findById(extrasId);
    res.json(activity);
  } catch (err) {
    const error = new Error(err);
    error.status = 404;
    return next(error);
  }
};

export const createExtraCurricular = async (req, res, next) => {
  const sentData = req.body;
  try {
    const newActivity = ExtraCurriculars.create(sentData);
    res.json(newActivity);
  } catch (err) {
    const error = new Error(err);
    error.status = 404;
    return next(error);
  }
};

export const updateExtraCurricular = async (req, res, next) => {
  const extrasId = req.params.id;
  const sentData = req.body;
  try {
    const updatedActivity = await ExtraCurriculars.findByIdAndUpdate(
      extrasId,
      sentData
    );
    res.json(updatedActivity);
  } catch (err) {
    const error = new Error(err);
    error.status = 404;
    return next(error);
  }
};

export const deleteExtraCurricular = async (req, res, next) => {
  const extrasId = req.params.id;
  try {
    const deleteMessage = await ExtraCurriculars.findByIdAndDelete(extrasId);
    res.send(deleteMessage);
  } catch (err) {
    const error = new Error(err);
    error.status = 404;
    return next(error);
  }
};
