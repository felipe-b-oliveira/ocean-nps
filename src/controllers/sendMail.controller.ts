import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { resolve } from 'path';

import { SurveysRepository } from '../repositories/survey.repository';
import { UsersRepository } from '../repositories/user.repository';
import { SurveysUsersRepository } from '../repositories/surveysUsers.repository';
import sendMailService from '../services/sendMail.service';


class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository)
    const surveysRepository = getCustomRepository(SurveysRepository)
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    const user = await usersRepository.findOne({ email });

    if (!user) {
        return response.status(400).json({
            error: "User does not exists",
        })
    }

    const survey = await surveysRepository.findOne({ id: survey_id });

    if (!survey) {
        return response.status(400).json({
            error: "Survey does not exists",
        })
    }

    // Salvar as informações na tabela surveyUser

    const variables = {
        name: user.name,
        title: survey.title,
        description: survey.description,
        user_id: user.id,
        link: process.env.URL_MAIL,
    }

    const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");

    const surveyUserAlreadyExist = await surveysUsersRepository.findOne({
        where: [{user_id: user.id}, {value : null}],
        relations: ["user", "survey"],
    })

    if(surveyUserAlreadyExist) {
        await sendMailService.execute(email, survey.title, variables, npsPath)
        return response.json(surveyUserAlreadyExist);
    }

    const surveyUser = surveysUsersRepository.create({
        user_id: user.id,
        survey_id,
    });
    
    await surveysUsersRepository.save(surveyUser)
    
    // Enviar e-mail para o usuario
        
    await sendMailService.execute(email, survey.title, variables, npsPath)

    return response.json(surveyUser);
  }

}

export { SendMailController };