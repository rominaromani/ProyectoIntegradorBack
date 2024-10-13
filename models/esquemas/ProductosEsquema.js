import mongoose from "mongoose";

const ProductosEsquema = mongoose.Schema({
    nombre : String,
    foto : String,
    detalles : String,
    precio : Number,
    stock : Number,
    marca : String,
    categoria : String,
    envio : Boolean
},
{
    timestamps: true, // añade created_at y updated_at 
    versionKey: false // quita el campo __v
}
)

export default ProductosEsquema