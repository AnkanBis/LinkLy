import { Router } from "express";
import { Request, Response } from "express";
import { signup } from "../controller/authController";
const router = Router();

router.post("/signup", signup);

export default router;
