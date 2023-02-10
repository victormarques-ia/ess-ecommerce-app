import UserModel from '../models/user.model';
import UserRepository from '../repositories/user.repository';

class UserService {
  constructor(private userRepository: UserRepository) {}

  public getUsers(): UserModel[] {
    return this.userRepository.getUsers();
  }

  public getUserById(id: string): UserModel | undefined {
    return this.userRepository.getUserById(id);
  }

  public createUser(user: UserModel): void {
    this.userRepository.createUser(user);
  }

  public updateUser(id: string, newData: UserModel): void {
    this.userRepository.updateUser(id, newData);
  }

  public deleteUser(id: string): void {
    this.userRepository.deleteUser(id);
  }
}

export default UserService;
