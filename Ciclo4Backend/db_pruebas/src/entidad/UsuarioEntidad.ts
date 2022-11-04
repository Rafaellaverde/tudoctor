import PerfilEntidad from "./PerfilEntidad"

export class UsuarioEntidad {
    public nombreUsuario: string
    public correoUsuario: string
    public claveUsuario: string
    public fechaRegristroUsuario: Date
    public estadoUsuario: number
    public codPerfil: PerfilEntidad;
  
    constructor(nom: string, cor :string, clave: string, fecha: Date, est:number, cod: PerfilEntidad) {
      this.nombreUsuario = nom
      this.correoUsuario= cor
      this.claveUsuario= clave
      this.fechaRegristroUsuario= fecha
      this.estadoUsuario = est
      this.codPerfil= cod
    }
  
  }
  
  export default UsuarioEntidad
  