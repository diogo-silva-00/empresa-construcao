const bcrypt = require('bcryptjs');

const senha = '12345678';
bcrypt.hash(senha, 10, (err, hash) => {
    if (err) {
        console.error('Erro ao gerar hash:', err);
        return;
    }
    console.log('Hash gerado:', hash);
});