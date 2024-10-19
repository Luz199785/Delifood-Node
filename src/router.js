import express from "express";
const router = express.Router();

router.get("/home", (req, res) => {
    res.render("home");
});

router.get("/comidas", (req, res) => {
    res.render("pages/comidas-api");
});

export default router;