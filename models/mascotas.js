import { ObjectId } from 'mongodb';
import dbClient from '../config/dbClient.js'

class mascotasModelo{
    async create(mascota){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.insertOne(mascota);
    }

    async getAll(){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.find({}).toArray();
    }

    async getOne(id){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.findOne({_id: new ObjectId(id)});
    }

    async update(id, mascota){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.updateOne({_id: new ObjectId(id)}, {$set: mascota});
    }

    async delete(id, mascota){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.deleteOne({_id: new ObjectId(id)});
    }
}

export default new mascotasModelo();