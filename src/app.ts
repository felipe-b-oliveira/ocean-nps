import 'reflect-metadata';
import express from 'express';
import "./database/typeorm"
import { router } from './routes/routes';

const app = express();

app.use(express.json());
app.use(router);

export { app };