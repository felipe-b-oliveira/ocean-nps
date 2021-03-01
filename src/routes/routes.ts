import { Router } from 'express';

import { UserController } from '../controllers/user.controller';
import { SurveysController } from '../controllers/survey.controller';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

router.post('/users', userController.create);

router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);

export { router };