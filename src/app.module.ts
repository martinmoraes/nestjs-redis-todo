import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoStringModule } from './todo-string/todo-string.module';

@Module({
  imports: [TodoStringModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
