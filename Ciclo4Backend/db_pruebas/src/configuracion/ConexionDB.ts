import { connect } from "mongoose"

const ConexionDB = () => {
  const urlConexion = String(process.env.DB_MONGO)
  connect(urlConexion)
    .then(() => {
      console.log("Conextados a la base de datos", process.env.DB_MONGO)
    })
    .catch((miError) => {
      console.log("NO se puede establecer conexion", miError)
    })
}

export default ConexionDB
