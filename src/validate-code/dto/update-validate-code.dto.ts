import { PartialType } from '@nestjs/mapped-types';
import { CreateValidateCodeDto } from './create-validate-code.dto';

export class UpdateValidateCodeDto extends PartialType(CreateValidateCodeDto) {}
