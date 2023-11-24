import express from "express";
import {upload } from "../Middleware/upload.js"
import { createDest, deleteDest, getDestByName, getDestMain, getDestinationsInternational, getDestinationsNorthIndia, getDestinationsSouthIndia, getDestsall, updateDestById } from "../Controllers/dest.js";
const router = express.Router();

router.get("/main",getDestMain)
router.get('/southindia', getDestinationsSouthIndia);
router.get('/northindia', getDestinationsNorthIndia);
router.get('/international', getDestinationsInternational);
router.get("/",getDestsall)
router.post("/createdest",upload.fields([{name: 'coverimage'} ] ),createDest);
router.patch("/updatedest/:id",upload.fields([{name: 'coverimage'}]  ),updateDestById);
router.get("/:name",getDestByName)
router.delete("/:id",deleteDest)


export default router;