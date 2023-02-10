import UserModel from '../models/user.model';

class UserRepository {
  private users: UserModel[] = [];

  public getUsers(): UserModel[] {
    return this.users;
  }

  public getUserById(id: string): UserModel | undefined {
    return this.users.find((user) => user.id === id);
  }

  public createUser(user: UserModel): void {
    this.users.push(user);
  }

  public updateUser(id: string, newData: UserModel): void {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('UserModel not found');
    }
    this.users[userIndex] = { ...this.users[userIndex], ...newData };
  }

  public deleteUser(id: string): void {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('UserModel not found');
    }
    this.users.splice(userIndex, 1);
  }
}

export default UserRepository;
