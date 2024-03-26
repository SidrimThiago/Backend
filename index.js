import main from '../Backend/db.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Rota inicial
app.get("/", (req, res) => {
    res.send("rodando na porta 3001");
});


app.post("/Auth", (req, res) => {
    const userData = req.body;
    res.send(userData);
    console.log(userData);
});

main();

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});