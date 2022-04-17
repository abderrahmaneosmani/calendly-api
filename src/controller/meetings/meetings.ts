import { Request, Response, NextFunction } from "express";
import { prisma } from "../../dbConfig/db";
const createMeeting = async (req: Request, res: Response) => {
  res.status(200).json({
    data: "hello",
  });
};
const getAllMeetings = async (req: Request, res: Response) => {
  res.status(200).json({
    data: "hello",
  });
};

export default { createMeeting, getAllMeetings };
