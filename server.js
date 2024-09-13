import express from "express";
import { coursesRouter } from "./routes/courses.js";
import lecturersRouter from "./routes/lecturers.js";
import extrasRouter from "./routes/extracurriculars.js";
import errorHandler from "./error.js";
import connectDb from "./connectDb.js";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const PORT = 8000;
const app = express();

//json middleware
app.use(express.json());

app.use("/api/courses", coursesRouter);
app.use("/api/lecturers", lecturersRouter);
app.use("/api/extracurriculars", extrasRouter);

app.use((req, res, next) => {
  const error = new Error("Route requested not Found");
  error.status = 404;
  next(error);
});

app.use(errorHandler);

connectDb(MONGODB_URI)
  .then(() => {
    console.log("Successfully Connected to DB...");
    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    });
  })
  .catch((err) => console.log("Failed to connect to Database: ", err));
