"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsuarioEsquema = new mongoose_1.Schema({
    nombreUsuario: { type: String, required: true, unique: true, trim: true },
    correoUsuario: { type: String, required: true, unique: true, lowercase: true },
    claveUsuario: { type: String, requerid: true },
    fechaRegristroUsuario: { type: Date, default: Date.now() },
    estadoUsuario: { type: Number, enum: [1, 2], default: 1 },
    codPerfil: { type: mongoose_1.Types.ObjectId, ref: "Perfil", required: true }
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Usuario", UsuarioEsquema, "Usuario");
