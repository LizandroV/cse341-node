// userAdmin
// qkxz6Iepfol5FyQE
import { MongoClient } from 'mongodb';
import 'dotenv/config';


class dbClient {
    constructor(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=adopcion`;
        this.client = new MongoClient(queryString);
        this.connect();
    }

    async connect(){
        try {
            await this.client.connect();
            this.db = this.client.db('adopcion');
            console.log('Conectado a la base de datos');
        } catch (error) {
            console.log('Error al conectar a la base de datos', error);
        }
    }
}

export default new dbClient;