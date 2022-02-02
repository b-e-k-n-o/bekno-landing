const express = require('express');
const app = express();
const session = require("express-session");

const categoriesController = require("./beknologia/categories/CategoriesController");
const articlesController = require("./beknologia/articles/ArticlesController");
const usersController = require("./users/UsersController");

app.set('view engine', 'ejs');

app.use(session({
    secret: "somethinghardtodecode", cookie: { maxAge: 30000000 }
}))


app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.get('/', (req, res) => {
    res.render("home.ejs");
})

app.get('/beknologia', (req, res) => {
    //res.send("Welcome to home page!")
    res.render("blog.ejs")
})

app.get('/resume', (req, res) => {
    res.render("resumee.ejs")
})

app.use("/", categoriesController);
app.use("/", articlesController);
app.use("/", usersController);

app.listen(3000, () => {
    console.log('Server listening on port: 3000')
})