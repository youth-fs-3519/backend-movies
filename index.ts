import express, { json } from 'express';
import { PrismaClient } from './generated/prisma';
import movieRouter from './routes/movies';
import authenticationRouter from './routes/authentication';

const app = express();
const prisma = new PrismaClient();

app.use(json());

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.use('/movies', movieRouter);
app.use('/auth', authenticationRouter);

app.listen(8000, () => {
    console.log('Server is running');
    console.log('http://localhost:8000');
});
