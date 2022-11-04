import {Router} from "express";
import usuarioControlador from "../controlador/UsuarioControlador";
import UsuarioControlador from "../controlador/UsuarioControlador";

class UsuarioRuta{
    public rutaApiUsuario:Router;

    constructor(){
        this.rutaApiUsuario= Router();
        this.configuracion();
    }

    public configuracion ():void{
        this.rutaApiUsuario.get("/todos",usuarioControlador.consulta);
        this.rutaApiUsuario.get('/todos/:codPerfil', usuarioControlador.consultPerfil);        
        this.rutaApiUsuario.get('/cantxperfil/:codPerfil', usuarioControlador.cantidadEnPerfil);        
        this.rutaApiUsuario.post("/nuevo",usuarioControlador.crear);        
        this.rutaApiUsuario.post('/iniciar', usuarioControlador.iniciar);
        this.rutaApiUsuario.delete("/eliminar/:codigo",usuarioControlador.eliminar);
        this.rutaApiUsuario.put("/actualizar/:codigo",usuarioControlador.actualizar);                
    }
}

const usuarioRuta = new UsuarioRuta();

export default usuarioRuta.rutaApiUsuario;
