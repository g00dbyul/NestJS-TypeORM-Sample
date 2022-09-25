import { Module } from "@nestjs/common";
import { UserController } from "./user.contoller";
import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository]
})
export class UserModule {}
