import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';
import { LibroService } from './libro/libro/libro.service';

@Module({
  controllers: [LibroController],
  providers: [LibroService]
})
export class ApiModule {}
