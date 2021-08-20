const express = require("express");
const router = express.Router();

const Category = require("./Category")

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new")
})

router.post("/admin/categories/new", (req, res) => {
    var name = req.body.name;
    Category.create({
        name:   name,
    }).then(() => {
        res.redirect("/blog");    
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;