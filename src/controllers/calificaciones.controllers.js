
import service from '../services/calificaciones.services.js'

const getCalificaciones = async (req,res) => {
const calificaciones = await service.getCalificaciones()
res.send(calificaciones)
}

const postCalificaciones = async (req,res) => {
    const nuevaCalificacion = req.body
    const calificaciones = await service.postCalificaciones()
    res.send(calificaciones)
    }

export default{
    getCalificaciones,
    postCalificaciones
}
