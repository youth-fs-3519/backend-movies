import { RequestHandler, Router } from "express";
import { PrismaClient } from "../generated/prisma";
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const authenticationRouter = Router();
const prisma = new PrismaClient();

authenticationRouter.post('/register', async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;

    const createdUser = await prisma.user.create({
        data: {
            name,
            email,
            password: await argon2.hash(password)
        }
    })

    res.json(createdUser)
});

authenticationRouter.post('/login', async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const user = await prisma.user.findFirst({
        where: { email }
    });

    if (user === null) {
        res.status(400).send('Usuário não encontrado');
        return;
    }

    const passwordIsValid = await argon2.verify(user.password, password);

    if (!passwordIsValid) {
        res.status(400).send('Senha inválida');
        return;
    }

    const payload = {
        email: user.email,
        name: user.name
    }
    res.send(jwt.sign(payload, 'segredo'));
});

export default authenticationRouter;