import { model, Schema,Types } from "mongoose"
import { UsuarioEntidad } from "../entidad/UsuarioEntidad"

const UsuarioEsquema = new Schema<UsuarioEntidad>(
  {
    nombreUsuario: { type: String, required: true, unique: true, trim: true },
    correoUsuario: {type: String, required: true, unique: true, lowercase:true },
    claveUsuario: {type:String, requerid:true},
    fechaRegristroUsuario:{type:Date, default:Date.now()},
    estadoUsuario:{type: Number, enum:[1,2], default:1},
    codPerfil: {type:Types.ObjectId,ref:"Perfil",required:true}
  },
  { versionKey: false }
)

export default model("Usuario", UsuarioEsquema, "Usuario")