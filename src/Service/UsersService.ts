import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../Repositories/UsersRepository"


class UsersService {

    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async findByEmail(email: string) {
        //Verificar se o usuario existe
        const userExist = await this.usersRepository.findOne({
            email
        })
        //Se existir , retornar user
        if (userExist) {
            return userExist;
        }
        else { null; }
    }
    async create(email: string) {
        const user = this.usersRepository.create({
            email
        });

        //Se não existir , salvar no DB
        await this.usersRepository.save(user);

        return user;
    }
}
export { UsersService }