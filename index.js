import main from '../Backend/db.js';
import express from 'express';
import cors from 'cors'

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("rodando na porta 3000");
});

main()

app.use(cors())
app.listen(3001)