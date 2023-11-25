import { Injectable } from '@nestjs/common';
import { CreateValidateCodeDto } from './dto/create-validate-code.dto';
import { UpdateValidateCodeDto } from './dto/update-validate-code.dto';

@Injectable()
export class ValidateCodeService {
  create(createValidateCodeDto: CreateValidateCodeDto) {
    return 'This action adds a new validateCode';
  }

  findAll() {
    return `This action returns all validateCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} validateCode`;
  }

  update(id: number, updateValidateCodeDto: UpdateValidateCodeDto) {
    return `This action updates a #${id} validateCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} validateCode`;
  }
}
