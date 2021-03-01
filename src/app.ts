import 'reflect-metadata';
import express from 'express';
import createConnection from "./database/typeorm"
import { router } from './routes/routes';

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };