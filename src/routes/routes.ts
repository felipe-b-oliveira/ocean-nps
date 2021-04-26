import { Router } from 'express';

import { UserController } from '../controllers/user.controller';
import { SurveysController } from '../controllers/survey.controller';
import { SendMailController } from '../controllers/sendMail.controller';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

router.post('/users', userController.create);

router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);

router.post("sendMail", sendMailController.execute);

export { router };