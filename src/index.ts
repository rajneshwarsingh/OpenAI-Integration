import express from 'express';
import { urlencoded, json } from 'body-parser';
import 'dotenv/config';
import openAIRouter from './routes/openAI';

const app = express();

const key: string = process.env.NODE_ENV || 'local';
const PORT = process.env.PORT;
app.use(urlencoded({ extended: true }));
app.use(json());

/* Routes */
app.use('/v1/openAI', openAIRouter);

app.listen(PORT, () => {
  console.log('Server listening port ' + PORT);
});
