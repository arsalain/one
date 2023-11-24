import express from "express";
import { getEnquiry, postEnquiry } from "../Controllers/enquiry.js";

const router = express.Router();

router.get("/",getEnquiry)
router.post("/save",postEnquiry)

export default router;