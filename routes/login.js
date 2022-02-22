"use strict"

const express = require("express");
const async = require("hbs/lib/async");
const router = express.Router();
router.get("/", (req, res) => {
    res.render("login");
});

router.post("/", async (req,res)=>{

});
module.exports = router;