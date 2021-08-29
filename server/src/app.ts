import express from "express";
import cors from "cors";
import "reflect-metadata";

import router from "./routes/index";

const app = express();

app.use(cors());

app.use("/", router);

export default app;
