import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroController } from './libro/controller/libro.controller';
import { LibroService } from './libro/service/libro.service';
import { LibroSchema } from './libro/models/libro.schema';

@Module({
  controllers: [LibroController],
  providers: [LibroService],
  imports: [MongooseModule.forFeature(
    [{
      name: 'Libro',
      schema: LibroSchema,
      collection: 'libros'
    }]
  )]
})
export class ApiModule { }
