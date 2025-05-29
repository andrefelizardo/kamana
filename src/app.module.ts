import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import MikroOrmConfig from './database/mikroorm-config';

@Module({
  imports: [MikroOrmModule.forRoot(MikroOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
