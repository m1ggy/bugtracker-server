import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());

const port = 8888 || process.env.PORT;

app.listen(8888, () => {
  console.log(`listening on port ${port}`);
});
