import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import routerProductos from './routers/productos.router.js'
import routerCarrito from './routers/carrito.router.js'
import getConnection from './utils/get-connection.js'

const app = express()
const PORT = process.env.PORT || 2222

app.use(express.json())
app.use(cors())

app.use('/api/v1/productos', routerProductos)
app.use('/api/v1/carritos', routerCarrito)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all('*', (req, res) => {
    res.status(404).json({
        ruta: `${reg.ruta}`,
        metodo : `${req.method}`,
        mensaje: 'Recurso no encontrado'
    })
})

app.listen(PORT, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`Servidor funcionando en: http://localhost:${PORT}`)
  getConnection()
})