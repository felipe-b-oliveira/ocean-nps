import { EntityRepository, Repository } from 'typeorm';
import { User } from '../models/user.model';

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository };