import express from "express";
import meetingController from "../../controller/meetings/meetings";
const router = express.Router();
router.get("/meeting", meetingController.createMeeting);
export default router;
