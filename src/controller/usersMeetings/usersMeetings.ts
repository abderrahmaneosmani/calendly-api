import { Request, Response, NextFunction } from "express";
import { prisma } from "../../dbConfig/db";
import { addUserMeeting, getUsrMeetingById } from "../../sevices/usersMeetings";
import { getDifferenceTimeStart } from "../../utils/checkTimes";

// const createUserMeeting = async (req: Request, res: Response) => {
//   const addMeeting = await addUserMeeting(data);
//   res.status(200).json({
//     data: addMeeting,
//   });
// };

const getAllUsersMeetings = async (req: Request, res: Response) => {
  const meetings = await prisma.userMeeting.findMany({
    include: {
      user: true,
      meeting: true,
    },
  });
  res.status(200).json({
    data: meetings,
  });
};
const getUserMeetingById = async (req: Request, res: Response) => {
  const userId = +req.params.id;
  const meetings = await getUsrMeetingById(userId);
  res.status(200).json({
    data: meetings,
  });
};

export default { getAllUsersMeetings, getUserMeetingById };
