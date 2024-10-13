import mongoose from "mongoose"
import ProductosEsquema from "./esquemas/ProductosEsquema.js"

const ProductosModelo = mongoose.model("productos", ProductosEsquema)

const obtenerTodos = async () => {
    try {
        const productos = await ProductosModelo.find()
        return productos
    } catch (error) {
        throw error
    }
}
const obtenerUnProducto = async (id) => {
    try {
        const producto = await ProductosModelo.findById(id)
        return producto
    } catch (error) {
        throw error
    }
}
const crearProducto = async (producto) => {
    try {
        const productoCreado = await ProductosModelo.create(producto)
        return productoCreado
    } catch (error) {
        throw error
    }
}
const actualizarProducto = async (id, producto) => {
    try {
        const options = { new: true }
        const productoActualizado = ProductosModelo.findByIdAndUpdate(id, producto, options)
        return productoActualizado
    } catch (error) {
        throw error
    }
}
const borrarProducto = async (id) => {
    try {
        const productoBorrado = ProductosModelo.findByIdAndDelete(id)
        return productoBorrado
    } catch (error) {
        throw error
    }
}

export default {
    obtenerTodos,
    obtenerUnProducto,
    crearProducto,
    actualizarProducto,
    borrarProducto
}