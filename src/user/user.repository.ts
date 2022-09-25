import { Injectable } from "@nestjs/common";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserRepository {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource
  ) {}
  private manager = this.dataSource.createEntityManager();

  async create(name: string, birthday: string, phoneNumber:string):Promise<User> {
    return await this.manager.save(User, {name, birthday, phoneNumber})
  }

  async findOneByPhoneNumber(phoneNumber: string):Promise<User | null> {
    const user = await this.manager.findOne(User, { where: { phoneNumber } });
    return user ?? null;
  }

  async findOneByUUID(uuid: string):Promise<User | null> {
    const user = await this.manager.findOne(User, { where: { uuid } })
    return user ?? null;
  }

  async updateUser(user: User, options: { name?: string, birthday?: string, phoneNumber?: string }): Promise<User> {
    return await this.manager.save(User, { ...user, ...options })
  }

  async deleteUser(user: User): Promise<boolean> {
    await this.manager.delete(User, user)
    return true
  }
}
