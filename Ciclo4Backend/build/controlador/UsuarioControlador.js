"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioDao_1 = __importDefault(require("../dao/UsuarioDao"));
class UsuarioControlador extends UsuarioDao_1.default {
    cantidadEnPerfil(req, res) {
        UsuarioControlador.cantidadUsuariosEnPerfil(req.params.codPerfil, res);
    }
    consulta(req, res) {
        UsuarioControlador.obtenerUsuarios(res);
    }
    consultPerfil(req, res) {
        UsuarioControlador.obtenerUsuariosPerfil(req.params.codPerfil, res);
    }
    crear(req, res) {
        const correo = { correoUsuario: req.body.correoUsuario };
        UsuarioControlador.crearUsuario(correo, req.body, res);
    }
    iniciar(req, res) {
        UsuarioControlador.iniciarSesion(req.body, res);
    }
    eliminar(req, res) {
        UsuarioControlador.eliminarUsuario(req.params.codigo, res);
    }
    actualizar(req, res) {
        UsuarioControlador.actualizarUsuario(req.params.codigo, req.body, res);
    }
}
;
const usuarioControlador = new UsuarioControlador();
exports.default = usuarioControlador;
