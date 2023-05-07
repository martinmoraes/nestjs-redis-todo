import {
  BadRequestException,
  CACHE_MANAGER,
  Inject,
  Injectable,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Cache } from 'cache-manager';

@Injectable()
export class TodoStringService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async create(createTodoDto: CreateTodoDto) {
    await this.cacheManager.set(createTodoDto.id, createTodoDto);
    return 'This action adds a new todo';
  }

  async findAll() {
    const todos = await this.cacheManager.get('todos');

    if (todos) {
      // this returns a cached version of todos
      return {
        message: 'Cached Todos',
        data: todos,
      };
    }

    //your todo logic goes here
    const freshTodos = [];

    // cache todos in redis
    await this.cacheManager.set('todos', freshTodos);

    return {
      message: 'Fresh todos',
      data: todos,
    };
  }

  async findOne(id: number) {
    const tudoResulted = await this.cacheManager.get(id);
    return {
      id,
      tudoResulted: tudoResulted ?? false,
    };
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const tudoResulted = await this.cacheManager.get(id);

    if (!tudoResulted) {
      throw new BadRequestException(`Usuário ${id} não encontrado.`);
    }

    for (const todoProperty in updateTodoDto) {
      tudoResulted[todoProperty] = updateTodoDto[todoProperty];
    }

    const setResulted = await this.cacheManager.set(id, tudoResulted);

    return {
      id,
      setResulted,
    };
  }

  async remove(id: number) {
    const deleteResulted = await this.cacheManager.del(id);

    return {
      id,
      deleteResulted,
    };
  }
}
