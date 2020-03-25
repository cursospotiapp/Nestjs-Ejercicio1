import { Injectable } from '@nestjs/common';
import { Libro } from '../../libro-dto';

@Injectable()
export class LibroService {

    private readonly libros: Libro[] = [];

    getLibros(): Libro[] {
        return this.libros;
    }

    createLibro(libro: Libro) {
        this.libros.push(libro);
        return libro;
    }

}
