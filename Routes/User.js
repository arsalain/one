import express from "express";
import {
    signup,
    signin,
    googleAuth,
    passwordLink,
    forgotPassword
} from "../Controllers/user.js"
const router = express.Router();

router.post("/signup", signup)
router.post("/signin", signin)
router.post("/google", googleAuth)
router.post("/passwordlink", passwordLink)
router.post("/forgotpassword/:id/:token", forgotPassword)

export default router;