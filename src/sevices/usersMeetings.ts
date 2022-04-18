import meetings from "../controller/meetings/meetings";
import { prisma } from "../dbConfig/db";

export const addUserMeeting = async (data: any) => {
  const addUserMeeting = await prisma.userMeeting.create({ data: data });
  if (!addUserMeeting) {
    throw new Error("not found this data");
  }
  return addUserMeeting;
};

export const getUsrMeetingById = async (userId: number) => {
  const meeting = await prisma.userMeeting.findMany({
    where: {
      guestId: userId,
    },
    include: {
      meeting: true,
    },
  });
  if (!meetings) {
    throw new Error("error ");
  }
  return meeting;
};
