import express from "express";
const router = express.Router();
import { signIn, signUp } from "../controllers/user.js";

router.route("/signin").post(signIn);
router.route("/signup").post(signUp);

export default router;
