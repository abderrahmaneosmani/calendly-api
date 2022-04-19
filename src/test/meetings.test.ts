import request from "supertest";
import { prisma } from "../dbConfig/db";

describe("Meeting Endpoints", () => {
  it("should create a meeting", async () => {
    const meeting = await prisma.meeting.create({
      data: {
        title: "meeting",
        description: "meeting test",
        createdBy: 1,
        guestId: 2,
        startAt: "2023-05-19T10:35:57.677Z",
        endAt: "2023-05-20T11:35:57.677Z",
      },
    });

    expect(meeting.title).toEqual("meeting");
    expect(meeting.description).toEqual("meeting test");
    expect(meeting.createdBy).toEqual(1);
    expect(meeting.guestId).toEqual(2);
    expect(meeting.startAt.toISOString()).toEqual("2023-05-19T10:35:57.677Z");
    expect(meeting.endAt.toISOString()).toEqual("2023-05-20T11:35:57.677Z");

    // expect(res.body).toHaveProperty("post");
  });
});
