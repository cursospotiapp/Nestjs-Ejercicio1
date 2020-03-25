import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { Libro } from '../libro-dto'
import { LibroService } from './libro/libro.service';

@Controller('libros')
export class LibroController {

    constructor(private readonly libroService: LibroService) { }

    @Get()
    findAll(): Libro[] {
        return this.libroService.getLibros();
    }


    @Get('/:id')
    getById(@Param() params): Libro {
        const libro = new Libro();
        libro.id = params.id;
        libro.titulo = 'Don Quijote';
        libro.autor = 'Don Quijote';
        libro.fecha = '1605'
        return libro;
    }

    @Post()
    addOne(@Body() libro: Libro): Libro {

        return this.libroService.createLibro(libro);
        /*
        const libroModif = new Libro();
        libroModif.id = 1;
        libroModif.titulo = libro.titulo;
        libroModif.autor = libro.autor;
        libroModif.fecha = libro.fecha;
        return libroModif;
        */
    }


    @Put('/:id')
    modifyById(@Param() params,
        @Body() libro: Libro): Libro {

        const libroAct = new Libro();
        libroAct.id = params.id;
        libroAct.titulo = libro.titulo;
        libroAct.autor = libro.autor;
        libroAct.fecha = libro.fecha;

        return libroAct;
    }


    @Delete('/:id')
    deleteById(@Param() params): Libro {
        const libro = new Libro();
        libro.id = params.id;
        libro.titulo = 'Pepe';
        libro.autor = 'Fulano Escritor';
        libro.fecha = '1605'
        return libro;
    }



}
