const express = require("express");
const router = express.Router();

const Article = require("./Article")
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/articles/new", adminAuth, (req, res) => {
    res.render("admin/articles/new")
})

router.post("/admin/articles/new", adminAuth, (req, res) => {
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