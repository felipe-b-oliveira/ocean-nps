import { EntityRepository, Repository } from 'typeorm';

import { Survey } from '../models/survey.model';

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey> {}

export { SurveysRepository };