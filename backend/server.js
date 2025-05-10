const express = require('express'); 
const cors = require('cors');
const db = require('./db'); // Importando a conexão com o banco
const funcionarioRoutes = require('./routes/funcionarios');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', funcionarioRoutes); // Rotas de funcionários em /api/funcionarios

app.get('/', (req, res) => {
    res.send('Servidor rodando corretamente!');
});

app.get('/teste', (req, res) => {
    db.query('SELECT 1', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao conectar ao banco de dados.');
            console.error(err);
            return;
        }
        res.send('Banco de dados conectado com sucesso!');
    });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
