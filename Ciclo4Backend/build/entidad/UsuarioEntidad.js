"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioEntidad = void 0;
class UsuarioEntidad {
    constructor(nom, cor, clave, fecha, est, cod) {
        this.nombreUsuario = nom;
        this.correoUsuario = cor;
        this.claveUsuario = clave;
        this.fechaRegristroUsuario = fecha;
        this.estadoUsuario = est;
        this.codPerfil = cod;
    }
}
exports.UsuarioEntidad = UsuarioEntidad;
exports.default = UsuarioEntidad;
