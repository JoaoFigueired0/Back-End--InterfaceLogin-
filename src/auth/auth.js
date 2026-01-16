import express from "express";
import { loginUser } from "../controllers/authController.js";

const router = express.Router();

// POST /login
router.post("/", loginUser);

export default router;
