import path from "path";
import { Router } from "express";
import { Request, Response } from "express-serve-static-core";
import HttpStatus from "../Enums/httpStatus";
const apiDoc = Router();

apiDoc.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../view/index.html"));
  res.status(HttpStatus.OK);
});

export default apiDoc;
