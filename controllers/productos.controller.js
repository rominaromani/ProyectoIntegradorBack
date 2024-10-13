import modelos from '../models/productos.models.js'
import handleMongoId from '../utils/handle-mongo-id.js'

const getAll = async (req, res) => {
    try{
        const productos = await modelos.obtenerTodos()
        res.json(handleMongoId(productos))
    }catch(error){
        console.log('[GET ALL]', error)
    }
}

const getOne = async (req, res) => {  
    const id = req.params.id
    try{
        const producto = await modelos.obtenerUnProducto(id)
        res.json(handleMongoId(producto))
    }catch(error){
        console.log('[GET ONE]', error)
    }
}

const create = async (req, res) => {
    const producto = req.body
    try{
        const productoCreado = await modelos.crearProducto(producto)
        res.status(201).json(handleMongoId(productoCreado))
    }catch(error){
        console.log('[CREATE]', error)
    }
}

const update = async (req, res) => {
    const id = req.params.id
    const productoEditado = req.body
    try {
        const productoActualizado = await modelos.actualizarProducto(id, productoEditado)

        res.json(handleMongoId(productoActualizado))
    } catch (error) {
        console.log('[UPDATE]', error)
    }
}
const remove = async (req, res) => {
    const id = req.params.id
    
    try {
        const productoBorrado = await modelos.borrarProducto(id)

        res.json(handleMongoId(productoBorrado))
    } catch (error) {
        console.log('[DELETE]', error)
    }
}

export default { getAll, getOne, create, update, remove }