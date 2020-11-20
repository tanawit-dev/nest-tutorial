import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const options = new DocumentBuilder()
    .setTitle('Nest example app')
    .setDescription('for prctict how to use nest')
    .setVersion('1.0')
    .addTag("products")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(configService.get<number>('SERVER_PORT'));
}
bootstrap();
