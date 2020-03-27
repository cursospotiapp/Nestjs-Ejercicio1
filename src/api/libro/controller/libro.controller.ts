import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { LibroDto } from '../dto/libro-dto'
import { Libro } from '../dto/libro';
import { LibroService } from '../service/libro.service';


@Controller('libros')
export class LibroController {

    constructor(private readonly libroService: LibroService) { }

    @Get()
    async findAll(): Promise<Libro[]> {
        return await this.libroService.getLibros();
    }

    @Get('/:id')
    async getById(@Param() params): Promise<Libro> {
        return await this.libroService.getLibroById(params.id);
    }

    @Post()
    async addLibro(@Body() libro: Libro): Promise<Libro> {
        return await this.libroService.createLibro(libro);
    }

    @Put('/:id')
    async modifyById(@Param() params,
        @Body() libro: Libro): Promise<Libro> {
        return await this.libroService.updateLibro(params.id, libro);
    }

    @Delete('/:id')
    async deleteById(@Param() params): Promise<Libro> {
        return await this.libroService.deleteLibro(params.id)
    }



}
