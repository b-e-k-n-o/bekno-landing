const express = require('express');
const app = express();

// const beknoController = require('./bekno/BeknoController')

app.set('view engine', 'ejs');

app.set(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render("teste.ejs");
})
// app.use('/', beknoController);

app.listen(3000, () => {
    console.log('Server listening on port: 3000')
})