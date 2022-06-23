import express from "express";
const app = express();
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import dotenv from "dotenv";
dotenv.config();

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// middleware from Express lets controllers have access to json data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

// middleware - placed after all other routes so will use this middleware after all the routes above aka if routes not exist then this middleware fire
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// ============================================================
const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
