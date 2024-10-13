import mongoose from 'mongoose'

const uri_remota = process.env.URI_MONGO

const getConnection = async () => {
  try{
      await mongoose.connect(uri_remota)
      console.log('Conectado a la base de datos')
  }catch(error){
      console.log('Error al conectar a la base de datos', error)
  }
}

export default getConnection