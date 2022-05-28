import express, { request, response } from 'express';
import { createCourse } from './routes';

const app = express();

app.get("/", createCourse);

app.listen(9090)