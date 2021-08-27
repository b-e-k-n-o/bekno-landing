const express = require("express");
const router = express.Router();
const slugify = require("slugify");

const Category = require("./Category")
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/categories/new", adminAuth, (req, res) => {
    res.render("admin/categories/new")
})

router.get("/admin/categories/list", adminAuth, (req, res) => {
    res.render("admin/categories/list")
})

router.post("/admin/categories/new", adminAuth, (req, res) => {
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