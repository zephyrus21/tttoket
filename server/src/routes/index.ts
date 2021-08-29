import * as express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello Bitch!!");
});

export default router;
