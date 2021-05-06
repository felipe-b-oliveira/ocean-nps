import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { resolve } from 'path';

import { SurveysRepository } from '../repositories/survey.repository';
import { UsersRepository } from '../repositories/user.repository';
import { SurveysUsersRepository } from '../repositories/surveysUsers.repository';
import sendMailService from '../services/sendMail.service';
import { AppError } from '../errors/app.error';


class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository)
    const surveysRepository = getCustomRepository(SurveysRepository)
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    const user = await usersRepository.findOne({ email });

    if (!user) {
        throw new AppError("User does not exists")
    }

    const survey = await surveysRepository.findOne({ id: survey_id });

    if (!survey) {
        throw new AppError("Survey does not exists!")
    }

    // Salvar as informações na tabela surveyUser

    const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");

    const surveyUserAlreadyExist = await surveysUsersRepository.findOne({
        where: {user_id: user.id, value : null},
        relations: ["user", "survey"],
    })

    const variables = {
        name: user.name,
        title: survey.title,
        description: survey.description,
        id: "",
        link: process.env.URL_MAIL,
    }

    if(surveyUserAlreadyExist) {
        variables.id = surveyUserAlreadyExist.id;
        await sendMailService.execute(email, survey.title, variables, npsPath)
        return response.json(surveyUserAlreadyExist);
    }

    const surveyUser = surveysUsersRepository.create({
        user_id: user.id,
        survey_id,
    });
    
    await surveysUsersRepository.save(surveyUser)
    
    // Enviar e-mail para o usuario
    
    variables.id = surveyUser.id;
    await sendMailService.execute(email, survey.title, variables, npsPath)

    return response.json(surveyUser);
  }

}

export { SendMailController };