import { EntityRepository, Repository } from 'typeorm';
import { SurveyUser } from '../models/surveyUser.model';

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser> {}

export { SurveysUsersRepository };