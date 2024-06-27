import express, { Response } from "express";
import router from "./routes";

const app = express();
app.use(express.json());
router(app)



let id = 0;
function geraId() {
  id = id + 1;
  return id;
}

export default app;
