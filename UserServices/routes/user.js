import express from "express";
const router = express.Router();
import { addUser, getUser } from "../controllers/user.js";

router.route("/").post(addUser);
router.route("/").get(getUser);

export default router;
