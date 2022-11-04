import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import ConexionDB from "./ConexionDB";

// aca van los import de las rutas
import perfilRuta from "../ruta/PerfilRuta";
import usuarioRuta from "../ruta/UsuarioRuta";
import seguridad from "../middleware/Seguridad";

// ************************************

class Servidor{
    public app:express.Application;

    constructor(){
        dotenv.config({ path: "variables.env" })
        ConexionDB()
        this.app=express();
        this.iniciarConfiguracion();
        this.iniciarRutas();

    }

    public iniciarConfiguracion(){
        this.app.set("PORT",process.env.PORT);
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json({limit:"100Mb"}));
        this.app.use(express.urlencoded({extended:true}));
    }

    public iniciarRutas(){
        this.app.use("/api/perfiles",seguridad.verificarToken, perfilRuta);
        this.app.use("/api/usuarios", usuarioRuta);
    }
    
    public iniciarServidor(){
        this.app.listen(this.app.get("PORT"),()=>{
            console.log("Servidor Backend en ",this.app.get("PORT"));
        });
    }
        
};

export default Servidor;