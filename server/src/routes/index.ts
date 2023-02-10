import express, { Router } from 'express';
import UserController from '../controllers/user.controller';

const prefix = '/api';
const router = Router();

export default (app: express.Express) => {
  app.use(prefix, new UserController(router).router);
};
