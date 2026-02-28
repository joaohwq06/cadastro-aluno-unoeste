const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// 👇 ADICIONE ISSO
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/cadastro', (req, res) => {
    const { nome, idade, curso } = req.body;

    res.send(`
        <html>
        <head>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="container">
                <h1>Aluno Cadastrado com Sucesso</h1>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Idade:</strong> ${idade}</p>
                <p><strong>Curso:</strong> ${curso}</p>
                <br>
                <a class="btn" href="/">Voltar</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});