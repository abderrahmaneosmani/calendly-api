import express from "express";
import meetingController from "../../controller/meetings/meetings";
const router = express.Router();
router.post("/meetings", meetingController.createMeeting);
router.get("/meetings", meetingController.getAllMeetings);
export default router;
