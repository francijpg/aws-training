import express from 'express';
import { Request, Response } from "express";
import sns from './sns';

const app = express();

app.get("/", async (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(sns);

export default app;