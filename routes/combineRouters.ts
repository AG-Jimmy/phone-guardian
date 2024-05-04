import { Router } from "express";
import apiDoc from "./apiDocRouter";
import notFound from "./notFoundRouter";
const routes = Router();

routes.use("/api-doc", apiDoc);
routes.all("*", notFound);

export default routes;
