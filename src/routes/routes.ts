import { Router } from 'express';

import { UserController } from '../controllers/user.controller';
import { SurveysController } from '../controllers/survey.controller';
import { SendMailController } from '../controllers/sendMail.controller';
import { AnswerController } from '../controllers/answer.controller';
import { NpsController } from '../controllers/nps.controller';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post('/users', userController.create);

router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);

router.post("sendMail", sendMailController.execute);

router.get("answers/:value", answerController.execute);

router.get("/nps/:survey_id", npsController.execute);

export { router };