import { RequestHandler } from "express";
import jwt from 'jsonwebtoken';

export const authMiddleware: RequestHandler = async (req, res, next) => {
    const header = req.header('Authorization');
    const token = header?.split(' ')[1];

    if (!token) {
        res.status(401).send('Não autenticado')
        return;
    }

    try {
        const isTokenValid = jwt.verify(token, 'segredo');
        next()
    } catch {
        res.status(403).send('Não autorizado');
    }
}
