import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  Session,
} from '@nestjs/common';
import { ValidateCodeService } from './validate-code.service';
import { CreateValidateCodeDto } from './dto/create-validate-code.dto';
import { UpdateValidateCodeDto } from './dto/update-validate-code.dto';

import * as svgCaptcha from 'svg-captcha';

@Controller('validate-code')
export class ValidateCodeController {
  constructor(private readonly validateCodeService: ValidateCodeService) {}

  @Get('code')
  createCode(@Res() res, @Session() session) {
    const captcha = svgCaptcha.create({
      size: 4, // 生成几位验证码
      fontSize: 50, // 文字大小
      width: 100, // 宽度
      height: 34, // 高度
      background: '#cc8787', // 背景颜色
    });
    console.log(captcha.text);
    session.code = captcha.text;
    res.type('image/svg+xml');
    res.send(captcha.data);
  }

  @Post('create')
  createUser(@Body() Body, @Session() session) {
    console.log(Body, session.code);
    if (session.code.toLocaleLowerCase() === Body?.code?.toLocaleLowerCase()) {
      return {
        code: 200,
        message: '验证成功',
      };
    } else {
      return {
        code: 200,
        message: '验证失败',
      };
    }
  }
}
