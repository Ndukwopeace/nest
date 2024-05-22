import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // create global validation pipeline so that you can use it in any controller
  // you don't need to crreate it again because nestjs has created it already 
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3001);
}
bootstrap();
