import { Router, Request, Response } from 'express';
import UserRepository from '../repositories/user.repository';
import UserService from '../services/user.service';

class UserController {
  public router: Router;
  public userService: UserService;

  constructor(
    router: Router = Router(),
    userService: UserService = new UserService(new UserRepository())
  ) {
    this.router = router;
    this.userService = userService;
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get('/users', this.getUsers);
    this.router.post('/users', this.createUser);
  }

  private getUsers(req: Request, res: Response) {
    // Your code to handle the GET /users endpoint
    // Call UserService to get the users

    res.status(200).send({
      message: 'GET /users',
      users: this.userService.getUsers(),
    });
  }

  private createUser(req: Request, res: Response) {
    // Your code to handle the POST /users endpoint
    // Call UserService to get the users
    res.status(200).send({
      message: 'POST /users',
      users: this.userService.createUser(req.body),
    });
  }
}

export default UserController;
