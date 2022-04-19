import { Request, Response, NextFunction } from "express";
import { prisma } from "../../dbConfig/db";
import { addUserMeeting, getUsrMeetingById } from "../../sevices/usersMeetings";
import { getDifferenceTimeStart } from "../../utils/checkTimes";

//create meeting
const createMeeting = async (req: Request, res: Response) => {
  const { title, description, createdBy, guestId, startAt, endAt } = req.body;
  const data = { title, description, createdBy, guestId, startAt, endAt };
  //check if guest have meetings
  const meetings = await getUsrMeetingById(guestId);

  if (meetings.length === 0) {
    const addMeeting = await prisma.meeting.create({
      data: data,
    });
    const guest1 = {
      meetingId: addMeeting.id,
      guestId: addMeeting.createdBy,
    };
    const guest2 = {
      meetingId: addMeeting.id,
      guestId: addMeeting.guestId,
    };
    const addGuest1 = await addUserMeeting(guest1);
    const addGuest2 = await addUserMeeting(guest2);
  }
  // if have meetings
  const dates = meetings.map((meeting) => {
    const startAt = meeting.meeting.startAt;
    const endAt = meeting.meeting.endAt;
    return { startAt, endAt };
  });
  const startDates = dates.map((date) => {
    const check = getDifferenceTimeStart(
      startAt as unknown as string,
      date.startAt,
      date.endAt
    );
    return check;
  });

  const length = startDates.length;
  const lengthTime = startDates.map((start) => {
    let sum = 0;
    if (start === true) sum += 1;
    return sum;
  });
  const sumFreeTime = lengthTime.reduce((ac, cur) => ac + cur, 0);
  if (length === sumFreeTime && length !== 0) {
    const addMeeting = await prisma.meeting.create({
      data: data,
    });
    const guest1 = {
      meetingId: addMeeting.id,
      guestId: addMeeting.createdBy,
    };
    const guest2 = {
      meetingId: addMeeting.id,
      guestId: addMeeting.guestId,
    };
    const addGuest1 = await addUserMeeting(guest1);
    const addGuest2 = await addUserMeeting(guest2);
  } else {
    throw new Error("please select another time");
  }

  //get meeting of guest to check if he have time free

  res.status(201).json({
    data: "",
  });
};
// else {
// const addGuest1 = await addUserMeeting(guest1);
// const addGuest2 = await addUserMeeting(guest2);
// }

//check start dates

//add user meeting
//add the guest

//get all  meetings
const getAllMeetings = async (req: Request, res: Response) => {
  const meetings = await prisma.meeting.findMany({});
  res.status(200).json({
    data: meetings,
  });
};

export default { createMeeting, getAllMeetings };
