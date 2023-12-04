import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./db/db.js";
import router from "./routes/userRoute.js";
import blogRouter from "./routes/blogRoute.js";

dotenv.config();

export const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

dbConnect();

const PORT = process.env.PORT || 3000;

app.use("/api", (req, res, next) => {
  res.send("Hello User!");
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
