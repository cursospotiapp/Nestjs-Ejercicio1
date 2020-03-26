import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroController } from './libro/controller/libro.controller';
import { LibroService } from './libro/service/libro.service';
import { LibroSchema } from './libro/models/libro.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Libro', schema: LibroSchema }])],
  controllers: [LibroController],
  providers: [LibroService]
})
export class ApiModule { }
