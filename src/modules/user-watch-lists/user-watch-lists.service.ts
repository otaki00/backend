import { Injectable } from '@nestjs/common';
import { CreateUserWatchListDto } from './dto/create-user-watch-list.dto';
import { UpdateUserWatchListDto } from './dto/update-user-watch-list.dto';

@Injectable()
export class UserWatchListsService {
  create(createUserWatchListDto: CreateUserWatchListDto) {
    return 'This action adds a new userWatchList';
  }

  findAll() {
    return `This action returns all userWatchLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userWatchList`;
  }

  update(id: number, updateUserWatchListDto: UpdateUserWatchListDto) {
    return `This action updates a #${id} userWatchList`;
  }

  remove(id: number) {
    return `This action removes a #${id} userWatchList`;
  }
}
