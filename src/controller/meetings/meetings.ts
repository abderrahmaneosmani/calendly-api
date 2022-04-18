import { Request, Response, NextFunction } from "express";
import { prisma } from "../../dbConfig/db";
import { addUserMeeting, getUsrMeetingById } from "../../sevices/usersMeetings";
import { getDifferenceTimeStart } from "../../utils/checkTimes";

//create meeting
const createMeeting = async (req: Request, res: Response) => {
  const body = req.body;
  const addMeeting = await prisma.meeting.create({
    data: body,
  });

  const guest1 = {
    meetingId: addMeeting.id,
    guestId: addMeeting.createdBy,
  };
  const guest2 = {
    meetingId: addMeeting.id,
    guestId: addMeeting.guestId,
  };

  const meetings = await getUsrMeetingById(guest1.guestId);
  const dates = meetings.map((meeting) => {
    const startAt = meeting.meeting.startAt;
    const endAt = meeting.meeting.endAt;
    return { startAt, endAt };
  });
  const check = dates.map((date) => {
    const c = getDifferenceTimeStart(
      addMeeting.startAt as unknown as string,
      date.startAt,
      date.endAt
    );
    return c;
  });

  //add user meeting
  const addGuest1 = await addUserMeeting(guest1);
  //add the guest
  const addGuest2 = await addUserMeeting(guest2);
  res.status(201).json({
    data: check,
  });
};

//get all  meetings
const getAllMeetings = async (req: Request, res: Response) => {
  const meetings = await prisma.meeting.findMany({});
  res.status(200).json({
    data: meetings,
  });
};

export default { createMeeting, getAllMeetings };
