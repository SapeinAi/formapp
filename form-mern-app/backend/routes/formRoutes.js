import express from "express"; // "Router" nahi, "express" se Router lena hai
import submitForm from "../controllers/formController.js"; // .js lagana zaroori hai

const router = express.Router();

router.post("/submit", submitForm);

export default router; // <-- Yeh likhna hai
