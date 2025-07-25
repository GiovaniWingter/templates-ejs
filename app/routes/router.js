var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {
    res.render("pages/index",{titulo:"Conceitos de Programação Back-End"})
});
router.get("/sobre-api", function (req, res) {
    res.render("pages/sobre-api",{titulo:"Sobre API's 1"})
});
router.get("/banco-de-dados", function (req, res) {
    res.render("pages/banco-de-dados")
});
router.get("/autenticacao", function (req, res) {
    res.render("pages/autenticacao")
});
router.get("/servidor", function (req, res) {
    res.render("pages/servidor")
});




module.exports = router;