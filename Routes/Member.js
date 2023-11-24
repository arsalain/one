import express from "express";
import { initiatememberpayment, savemember, verifymemberpayment } from "../Controllers/member.js";

const router = express.Router();

router.post("/initiatePayment",initiatememberpayment)
router.post("/verifyPayment",verifymemberpayment)
router.post("/savePayment",savemember)

export default router;