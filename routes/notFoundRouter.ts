import path from "path";
import { Router } from "express";
import { Request, Response } from "express-serve-static-core";
import HttpStatus from "../Enums/httpStatus";

const notFound = Router();

notFound.all("*", (req: Request, res: Response) => {
  res.status(HttpStatus.NOT_FOUND);

  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "../view/404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else res.type("txt").send("404 Not Found");
});

export default notFound;
