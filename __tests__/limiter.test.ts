import request from "supertest";
import express from "express";
import limiter from "../src/middlewares/rateLimitRequests"; // Adjust the import path as necessary

const app = express();
app.use(limiter);
app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

describe("Rate Limiter", () => {
  it("should allow requests under the rate limit", async () => {
    for (let i = 0; i < 100; i++) {
      const response = await request(app).get("/");
      expect(response.status).toBe(200);
    }
  });

  it("should block requests over the rate limit", async () => {
    for (let i = 0; i < 100; i++) {
      await request(app).get("/");
    }
    const response = await request(app).get("/");
    expect(response.status).toBe(429);
    expect(response.text).toBe("Too many requests, please try again later.");
  });

  /*
   * jest.setTimeout(1 * 60 * 1000); // Set timeout to 16 minutes (960000 milliseconds)
   *   it("should reset the rate limit after the window", async () => {
   *   for (let i = 0; i < 100; i++) {
   *     await request(app).get("/");
   *   }
   *   await new Promise((resolve) => setTimeout(resolve, 1 * 60 * 1000)); // Wait for the window to reset
   *   const response = await request(app).get("/");
   *   expect(response.status).toBe(200);
   *   });
   */
});
