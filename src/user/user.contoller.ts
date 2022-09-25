import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./create-user.dto";
import { User } from "./user.entity";
import { UpdateUserDTO } from "./update-user.dto";

@Controller('v1/users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Post()
  async createUser(
    @Body() createUserDTO:CreateUserDTO
  ): Promise<User> {
    const { name, birthday, phoneNumber } = createUserDTO
    return await this.userService.createUser(name, birthday, phoneNumber)
  }

  @Get(':phoneNumber')
  async findUserByPhoneNumber(
    @Param('phoneNumber') phoneNumber: string
  ): Promise<User | null> {
    return await this.userService.findUserByPhoneNumber(phoneNumber)
  }

  @Patch(':uuid')
  async updateUser(
    @Param('uuid') uuid: string,
    @Body() updateUserDTO: UpdateUserDTO
  ): Promise<User> {
    const { name, birthday, phoneNumber } = updateUserDTO
    return await this.userService.updateUser(uuid, { name, birthday, phoneNumber })
  }

  @Delete(':uuid')
  async deleteUser(
    @Param('uuid') uuid: string
  ): Promise<boolean> {
    return await this.userService.deleteUser(uuid);
  }
}
