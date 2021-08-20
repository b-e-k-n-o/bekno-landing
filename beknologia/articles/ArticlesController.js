const express = require("express");
const router = express.Router();

const Article = require("./Article")

router.get("/admin/articles/new", (req, res) => {
    res.render("admin/articles/new")
})

router.post("/admin/articles/new", (req, res) => {
    var name = req.body.name;
    Article.create({
        name:   name,
    }).then(() => {
        res.redirect("/blog");    
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;