import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import cors from "cors";
import formRoutes from "./routes/formRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/form", formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
