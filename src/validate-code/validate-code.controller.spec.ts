import { Test, TestingModule } from '@nestjs/testing';
import { ValidateCodeController } from './validate-code.controller';
import { ValidateCodeService } from './validate-code.service';

describe('ValidateCodeController', () => {
  let controller: ValidateCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidateCodeController],
      providers: [ValidateCodeService],
    }).compile();

    controller = module.get<ValidateCodeController>(ValidateCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
