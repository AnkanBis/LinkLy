import express, { Request, Response, NextFunction, Application } from "express";
import authRouter from "./routes/authRoutes";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use(authRouter);

app.listen(PORT, () =>
  console.log(`Linkly Running on http://localhost:${PORT}`)
);
