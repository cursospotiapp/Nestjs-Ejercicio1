import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
//import { LibroDto } from '../dto/libro-dto';
import { Libro } from '../dto/libro';

@Injectable()
export class LibroService {

    constructor(@InjectModel('Libro') private libroModel: Model<Libro>) { }

    async getLibros(): Promise<Libro[]> {
        // this.logger.log(this.libroModel.find().exec());
        return await this.libroModel.find();
    }

    async getLibroById(id: String): Promise<Libro> {
        // this.logger.log(this.libroModel.find().exec());
        return await this.libroModel.findById(id);
    }

    async createLibro(libro: Libro): Promise<Libro> {
        const libroBD: Libro = await this.libroModel.create(libro);
        return libroBD;
    }

    async updateLibro(id: string, libro: Libro): Promise<Libro> {
        await this.libroModel.updateOne({ _id: id }, libro);
        return await this.libroModel.findById(id);
    }

    async deleteLibro(id: string): Promise<Libro> {
        const datoGuardado = await this.libroModel.findById(id)
        await this.libroModel.findOneAndRemove({ _id: id });
        return datoGuardado;
    }


}
