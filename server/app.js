import * as dotenv from 'dotenv';
import 'express-async-errors';
import express from 'express';
import { notFoundMiddleware, errorHandlerMiddleware } from './middleware/index.js';

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Email Project</h1>');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server run on porn: ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
};

start();
