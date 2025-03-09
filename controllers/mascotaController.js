import mascotasModel from '../models/mascotas.js';

class mascotaController{
    constructor(){
        this.mascotas = [];
    }

    async create(req, res){
        try{
            const data = await mascotasModel.create(req.body);
            res.status(201).json(data);
        } catch (error){
            res.status(500).json({message: 'Error al crear mascota' + error});
        }
    }

    async update(req, res){
        try{
            const { id } = req.params;
            const data = await mascotasModel.update(id, req.body);
            res.status(200).json(data);
        } catch (error){
            res.status(500).json({message: 'Error al crear mascota' + error});
        }
    }

    async delete(req, res){
        try{
            const { id } = req.params;
            const data = await mascotasModel.delete(id);
            res.status(206).json(data);
        } catch (error){
            res.status(500).json({message: 'Error al crear mascota' + error});
        }
    }

    async getAll(req, res){
        try{
            const data = await mascotasModel.getAll();
            res.status(200).json(data);
        } catch (error){
            res.status(500).json({message: 'Error al crear mascota' + error});
        }
    }

    async getOne(req, res){
        try{
            const { id } = req.params;
            const data = await mascotasModel.getOne(id);
            res.status(200).json(data);
        } catch (error){
            res.status(500).json({message: 'Error al crear mascota' + error});
        }
    }

}

export default new mascotaController();