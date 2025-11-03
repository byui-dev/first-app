const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Obakeng Diphala!');
});

const port = 3001;
console.log('Web server is listening at port' * (process.env.port || port));
