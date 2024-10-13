import express from 'express'
const routerProductos = express.Router()
import controladores from '../controllers/productos.controller.js'

routerProductos.get('/', controladores.getAll)

routerProductos.get('/:id', controladores.getOne)

routerProductos.post('/', controladores.create)

routerProductos.put('/:id', controladores.update)

routerProductos.delete('/:id', controladores.remove)

export default routerProductos