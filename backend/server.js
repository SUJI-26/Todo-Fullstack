import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import todoRoutes from "./routes/todos.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err.message));

// Routes
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => res.send("Todo API running 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
