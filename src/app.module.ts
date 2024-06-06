import { Module } from '@nestjs/common';
AppController;
import { AppController } from './app/controllers/app.controller';

@Module({
    imports: [],
    controllers: [AppController],
})
export class AppModule {}
