import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('api')
export class ControllerImp {
  @Get('')
  public getControllerImp(_: Request, resp: Response): void {
    resp.send({
      data: {
        name: 'Joao',
        id: 32,
        age: 37,
        code: '3256-64893-4563',
      },
    });
  }
}
