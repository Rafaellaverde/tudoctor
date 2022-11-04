"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Seguridad {
    verificarToken(req, res, next) {
        var _a;
        if (!req.headers.authorization) {
            res.status(401).json({ res: "No Tiene Credenciales" });
        }
        else {
            try {
                const miLlavePrivada = String(process.env.CLAVE_SECRETA);
                const elToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
                const misDatos = jsonwebtoken_1.default.verify(elToken, miLlavePrivada);
                req.body.datosUsuario = misDatos;
                next();
            }
            catch (error) {
                res.status(401).json({ res: "Credenciales Invalidas" });
            }
        }
    }
}
const seguridad = new Seguridad();
exports.default = seguridad;
