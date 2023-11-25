import { Module } from '@nestjs/common';
import { ValidateCodeService } from './validate-code.service';
import { ValidateCodeController } from './validate-code.controller';

@Module({
  controllers: [ValidateCodeController],
  providers: [ValidateCodeService],
})
export class ValidateCodeModule {}
