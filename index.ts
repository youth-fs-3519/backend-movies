import express, { json } from 'express';

const app = express();

app.use(json());

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(8000, () => {
    console.log('Server is running');
    console.log('http://localhost:8000');
});
