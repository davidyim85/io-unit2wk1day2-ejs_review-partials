const express = require('express');
const app = express();

/*
Routes
*/
app.get('/', (req, res) => {
    res.render('./pages/home.ejs');
});


app.get('/show', (req, res) => {
    res.render('./show.ejs');
});

app.get('/edit', (req, res) => {
    res.render('./edit.ejs');
});

const PORT = 3001;
app.listen(PORT, () => {
    `listening to port: ${PORT}`
});

