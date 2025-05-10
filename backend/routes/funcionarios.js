const express = require('express');
const db = require('../db'); // Importando a conexão com o banco de dados
const router = express.Router();

// Listar todos os funcionários
router.get('/funcionarios', (req, res) => {
    const query = `
        SELECT f.id_funcionario, f.nome, f.email, f.data_nascimento, f.ativo_inativo,
               f.data_inicio, f.data_fim, f.salario, f.telefone, f.endereco,
               c.nome_cargo
        FROM funcionarios f
        JOIN cargos c ON f.id_cargo = c.id_cargo
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao listar funcionários:', err);
            return res.status(500).json({ error: 'Erro ao listar funcionários' });
        }
        res.json(results);
    });
});

module.exports = router;