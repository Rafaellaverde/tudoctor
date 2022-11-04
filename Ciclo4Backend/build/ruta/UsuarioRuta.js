"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioControlador_1 = __importDefault(require("../controlador/UsuarioControlador"));
class UsuarioRuta {
    constructor() {
        this.rutaApiUsuario = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaApiUsuario.get("/todos", UsuarioControlador_1.default.consulta);
        this.rutaApiUsuario.get('/todos/:codPerfil', UsuarioControlador_1.default.consultPerfil);
        this.rutaApiUsuario.get('/cantxperfil/:codPerfil', UsuarioControlador_1.default.cantidadEnPerfil);
        this.rutaApiUsuario.post("/nuevo", UsuarioControlador_1.default.crear);
        this.rutaApiUsuario.post('/iniciar', UsuarioControlador_1.default.iniciar);
        this.rutaApiUsuario.delete("/eliminar/:codigo", UsuarioControlador_1.default.eliminar);
        this.rutaApiUsuario.put("/actualizar/:codigo", UsuarioControlador_1.default.actualizar);
    }
}
const usuarioRuta = new UsuarioRuta();
exports.default = usuarioRuta.rutaApiUsuario;
