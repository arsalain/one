import express from "express";
import {upload } from "../Middleware/upload.js"
import { createBlog, getBlogByName, getBlogssall } from "../Controllers/blog.js";
const router = express.Router();

router.post("/createblog",upload.fields([  ...Array.from({ length: 30 }, (_, i) => ({ name: `blogImage[${i}]` })) ] ),createBlog);
router.get("/:name",getBlogByName)
router.get("/",getBlogssall)
export default router;