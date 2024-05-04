import express from "express";
import supertest from "supertest";
import notFound from "../routes/notFoundRouter";
import path from "path";
import fs from "fs";
import HttpStatus from "../Enums/httpStatus";
describe("notFound middleware", () => {
  it("should respond with HTML for HTML request", async () => {
    const app = express();
    app.use(notFound);
    const response = await supertest(app)
      .get("/test")
      .set("Accept", "text/html");
    expect(response.status).toBe(HttpStatus.NOT_FOUND);
    expect(response.headers["content-type"]).toBe("text/html; charset=UTF-8");
  });

  it("should respond with JSON for JSON request", async () => {
    const app = express();
    app.use(notFound);
    const response = await supertest(app)
      .get("/test")
      .set("Accept", "application/json");
    expect(response.status).toBe(HttpStatus.NOT_FOUND);
    expect(response.headers["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
    expect(response.body.message).toBe("404 Not Found");
  });

  it("should respond with plain text for other request", async () => {
    const app = express();
    app.use(notFound);
    const response = await supertest(app)
      .get("/test")
      .set("Accept", "text/plain");
    expect(response.status).toBe(HttpStatus.NOT_FOUND);
    expect(response.headers["content-type"]).toBe("text/plain; charset=utf-8");
    expect(response.text).toBe("404 Not Found");
  });

  it("should serve HTML file for HTML request", async () => {
    const app = express();
    app.use(notFound);
    const response = await supertest(app)
      .get("/test")
      .set("Accept", "text/html");
    expect(response.status).toBe(HttpStatus.NOT_FOUND);
    expect(response.headers["content-type"]).toBe("text/html; charset=UTF-8");
    const filePath = path.join(__dirname, "../view/404.html");
    const expectedHTML = fs.readFileSync(filePath, "utf-8");
    expect(response.text).toBe(expectedHTML);
  });
});
