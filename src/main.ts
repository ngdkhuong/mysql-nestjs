import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './swagger/swagger';
import * as cookieParser from 'cookie-parser';

(async () => {
    const app = await NestFactory.create(AppModule);
    SwaggerModule.setup('api', app, createDocument(app));
    app.use(cookieParser);
    await app.listen(3000);
})();
