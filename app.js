const express = require('express');
const app = express();

const categoriesController = require("./beknologia/categories/CategoriesController");
const articlesController = require("./beknologia/articles/ArticlesController");


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.get('/', (req, res) => {
    res.render("teste.ejs");
})

app.get('/blog', (req, res) => {
    //res.send("Welcome to home page!")
    res.render("blog.ejs")
})

app.use("/", categoriesController);
app.use("/", articlesController);

app.listen(3000, () => {
    console.log('Server listening on port: 3000')
})