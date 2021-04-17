import express from "express";
const router = express.Router();
import { addUser, getUser } from "../controllers/user.js";

router.route("/").post(addUser);
router.route("/:username").get(getUser);

export default router;
