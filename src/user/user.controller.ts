import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get()
  // findAll(@Request() req) {
  //   console.log(req.query);

  //   return {
  //     code: 200,
  //     message: req.query.name,
  //   };
  // }

  @Get()
  findAll(@Query() query) {
    console.log(query);
    return {
      code: 200,
      message: query.name,
    };
  }

  @Get(':id')
  @HttpCode(200)
  findId(@Param('id') id: number) {
    return {
      code: 200,
      msg: id,
    };
  }

  // @Post()
  // create(@Request() req) {
  //   console.log(req);

  //   return {
  //     code: 200,
  //     message: req.body.name,
  //   };
  // }
  @Post()
  create(@Body('name') name: string, @Body('age') age: string) {
    return {
      code: 200,
      name,
      age,
    };
  }
}
