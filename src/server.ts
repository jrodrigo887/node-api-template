import { Server } from '@overnightjs/core';
import './util/module-alias';
import bodyParser from 'body-parser';
import { ControllerImp } from './controllers/controller';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
    console.log(this.port);
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const controllerImplement = new ControllerImp();
    this.addControllers([controllerImplement]);
  }

  public getApp(): Application {
    return this.app;
  }
}
