import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async createUser(name:string, birthday: string, phoneNumber: string):Promise<User> {
    return await this.userRepository.create(name, birthday, phoneNumber)
  }

  async findUserByPhoneNumber(phoneNumber: string): Promise<User | null> {
    return await this.userRepository.findOneByPhoneNumber(phoneNumber);
  }

  async updateUser(uuid: string, options: { name?: string, birthday?: string, phoneNumber?: string }) {
    const user = await this.userRepository.findOneByUUID(uuid);
    if(!user) {
      throw Error('Not Exist User')
    }
    return await this.userRepository.updateUser(user, options)
  }

  async deleteUser(uuid: string) {
    const user = await this.userRepository.findOneByUUID(uuid);
    if(!user) {
      throw Error('Not Exist User')
    }
    return await this.userRepository.deleteUser(user);
  }
}
