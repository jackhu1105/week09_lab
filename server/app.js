import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signupRouter from "./routes/signup.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));

app.use("/api/signup", signupRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
