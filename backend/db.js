const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', // ou o IP do seu servidor MySQL
    user: 'root',      // seu usuário do MySQL
    password: 'senhasql',      // sua senha do MySQL
    database: 'empresa_construcao', // nome do banco de dados
    port: 3306,
    connectTimeout: 10000
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});

module.exports = connection;
