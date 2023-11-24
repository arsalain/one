const express = require("express");
const trekController = require("../Controllers/trek.js");
const uploadMiddleware = require("../Middleware/upload.js");

const router = express.Router();

router.get("/main", trekController.getTreksMain);
router.get('/grouptour', trekController.getTreksGroupTour);
router.get('/longtour', trekController.getTreksLongTour);
router.get('/international', trekController.getTreksInternational);
router.get('/northindiatour', trekController.getTreksNorthIndiaTour);
router.get('/northindiatrek', trekController.getTreksNorthIndiaTrek);
router.get('/karnatakatrek', trekController.getTreksKarnatakaTrek);
router.get('/keralatrek', trekController.getTreksKeralaTrek);
router.get('/tntrek', trekController.getTreksTNTrek);
router.get("/", trekController.getTreksall);
router.post("/createtrek", uploadMiddleware.upload.fields([
    { name: 'testimage' },
    { name: 'lead1pimg' },
    { name: 'lead2pimg' },
    // Repeat this pattern for as many days as you support, the example shows up to dayImage[9]
    ...Array.from({ length: 10 }, (_, i) => ({ name: `dayImage[${i}]` })),
    // Similar for related images
    ...Array.from({ length: 3 }, (_, i) => ({ name: `relatedImage[${i}]` })),
]), trekController.createTrek);
router.patch("/updatetrek/:id", uploadMiddleware.upload.fields([
    { name: 'testimage' },
    { name: 'lead1pimg' },
    { name: 'lead2pimg' },
    // Include additional fields as needed
]), trekController.updateTrekById);
router.get("/trek/:name", trekController.getTrekByName);
router.get("/:id", trekController.getTrekById);
router.get("/tour/:name", trekController.getTourByName);

module.exports = router;