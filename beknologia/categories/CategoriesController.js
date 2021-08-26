const express = require("express");
const router = express.Router();
const slugify = require("slugify");

const Category = require("./Category")

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new")
})

router.get("/admin/categories/list", (req, res) => {
    res.render("admin/categories/list")
})

router.post("/admin/categories/new", (req, res) => {
    var name = req.body.name;
    if(name != undefined) {
        Category.create({
        name:   name,
        slug: slugify(name)
    }).then(() => {
        res.redirect("/blog");    
    }).catch((err) => {
        console.log(err)
    })}else{
        res.redirect("admin/categories/new")
    }
})

module.exports = router;