import { Test, TestingModule } from '@nestjs/testing';
import { TodoStringController } from './todo-string.controller';
import { TodoStringService } from './todo-string.service';

describe('TodoStringController', () => {
  let controller: TodoStringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoStringController],
      providers: [TodoStringService],
    }).compile();

    controller = module.get<TodoStringController>(TodoStringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
