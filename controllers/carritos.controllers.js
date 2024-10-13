import modelosCarrito from '../models/carrito.models.js';

const guardarCarrito = async (req, res) => {

    const productosCarrito = req.body;

    try {
        const carritoGuardado = await modelosCarrito.crearCarrito(productosCarrito);
        res.status(201).json(carritoGuardado);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default {
    guardarCarrito
}