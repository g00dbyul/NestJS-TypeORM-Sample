import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerConfigModule } from "./config/server-config.module";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./user/user.module";
import { ServerConfigService } from "./config/server-config.service";

@Module({
  imports: [ServerConfigModule,
    UserModule,
    DatabaseModule.forRootAsync({
      inject: [ServerConfigService],
      useFactory: (configService: ServerConfigService) => configService.typeOrmConfig
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
