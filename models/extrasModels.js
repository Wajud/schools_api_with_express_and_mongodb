import mongoose from "mongoose";

const ExtrasSchema = new mongoose.Schema({
  id: String,
  title: {
    type: String,
    required: [
      true,
      "You must provide a title for the extracurricular activity",
    ],
  },
  scope: {
    type: String,
    required: [
      true,
      "You must provide a scopre for the extracurricular activity",
    ],
  },
  members: Number,
  isCompulsory: {
    type: Boolean,
    default: false,
  },
});

const ExtraCurriculars = mongoose.model("ExtraCurriculars", ExtrasSchema);
export default ExtraCurriculars;
