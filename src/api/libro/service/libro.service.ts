import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
//import { LibroDto } from '../dto/libro-dto';
import { Libro } from '../dto/libro';

@Injectable()
export class LibroService {

    constructor(@InjectModel('Libro') private libroModel: Model<Libro>) { }


    //private readonly libros: Libro[] = [];

    async getLibros(): Promise<Libro[]> {
        return this.libroModel.find().exec();
    }

    /*
    createLibro(libro: Libro) {
        this.libros.push(libro);
        return libro;
    }
    */

}
