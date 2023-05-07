import { Test, TestingModule } from '@nestjs/testing';
import { TodoStringService } from './todo-string.service';

describe('TodoStringService', () => {
  let service: TodoStringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoStringService],
    }).compile();

    service = module.get<TodoStringService>(TodoStringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
