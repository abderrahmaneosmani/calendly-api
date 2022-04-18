import express from "express";
import userMeetingController from "../../controller/usersMeetings/usersMeetings";
const router = express.Router();
router.get("/usersmeetings", userMeetingController.getAllUsersMeetings);
router.get("/usersmeetings/:id", userMeetingController.getUserMeetingById);

export default router;
