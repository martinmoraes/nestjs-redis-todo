import { Module } from '@nestjs/common';
import { TodoStringService } from './todo-string.service';
import { TodoStringController } from './todo-string.controller';
import { RedisCacheModule } from '../redis-cache/redis-cache.module';

@Module({
  imports: [RedisCacheModule],
  controllers: [TodoStringController],
  providers: [TodoStringService],
})
export class TodoStringModule {}
