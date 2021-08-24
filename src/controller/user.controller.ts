import { User } from './../model/user';
import { Request, Response, NextFunction, Router } from "express"
import { getConnection } from "typeorm";
import { Http } from '@status/codes';

const router = Router();

class UserController {
  async getUsers(req: any, res: Response, next: NextFunction) {
    return res.status(200).json({
      success: true,
      data: [
        {
          name: "John",
        },
        {
          name: "Steve",
        },
      ],
    })
  }

  async getAll(req: Request, res: Response) {
    const users = await getConnection()
        .getRepository(User)
        .createQueryBuilder("user")
        .getMany();
    return res.status(Http.Ok).json({users});
 }

  async save(req: Request, res: Response) {
    const user:User = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;


    const connection = await getConnection();

    const repository = connection.getRepository(User);

    const result = await repository.save(user);

    return res.status(Http.Ok).json({result});
  }
}

export default new UserController()