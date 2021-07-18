import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { db } from './connect.js';
const app = express();
app.use(cors());

const port = 8000 || process.env.PORT;

app.listen(port, () => {
  if (db) {
    console.log('connected to mongoDB!');
  }
  console.log(`listening on port ${port}`);
});
