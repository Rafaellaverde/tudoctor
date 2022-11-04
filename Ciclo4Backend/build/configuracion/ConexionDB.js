"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ConexionDB = () => {
    const urlConexion = String(process.env.DB_MONGO);
    (0, mongoose_1.connect)(urlConexion)
        .then(() => {
        console.log("Conextados a la base de datos", process.env.DB_MONGO);
    })
        .catch((miError) => {
        console.log("NO se puede establecer conexion", miError);
    });
};
exports.default = ConexionDB;
