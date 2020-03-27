import * as mongoose from 'mongoose';

export const LibroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    fecha: {
        type: Date,
        default: Date.now
    }
});