const mysql = require('mysql2'); // Conecta ao MySQL

const connection = mysql.createConnection({
    host: process.env.DB_HOST , // ou o IP do seu servidor MySQL
    user: process.env.DB_USER ,     // seu usuário do MySQL
    password: process.env.DB_PASSWORD ,     // sua senha do MySQL
    database: process.env.DB_NAME , // nome do banco de dados
    port: process.env.DB_PORT , // porta do MySQL
    connectTimeout: 10000 // tempo limite de conexão em milissegundos
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});

module.exports = connection;
