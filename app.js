const express = require('express');
const app = express();

const categoriesController = require("./beknologia/categories/CategoriesController");
const articlesController = require("./beknologia/articles/ArticlesController");
const usersController = require("./users/UsersController");


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.get('/', (req, res) => {
    res.render("home.ejs");
})

app.get('/beknologia', (req, res) => {
    //res.send("Welcome to home page!")
    res.render("soon.ejs")
})

app.use("/", categoriesController);
app.use("/", articlesController);
app.use("/", usersController);

app.listen(3000, () => {
    console.log('Server listening on port: 3000')
})