import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://demo-vecel-react.vercel.app",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

export default app;
