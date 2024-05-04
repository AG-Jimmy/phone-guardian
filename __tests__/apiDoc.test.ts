import request from "supertest";
import server from "../server"; // Importing the server instance
import HttpStatus from "../Enums/httpStatus";

describe("Test Doc Page root", () => {
  test("It should respond to the GET method", async () => {
    const response = await request(server).get("/api-doc");
    expect(response.status).toBe(HttpStatus.OK);
  });
});

afterAll((done) => {
  server.close(done);
});
