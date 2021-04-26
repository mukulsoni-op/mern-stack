import expess from "express";
import mongoose from "mongoose";
import {getStudents, createStudent} from "../controller/student"

import student from "../model/student"
const router = express.Router();


router.get("/", getStudents);
router.post("/", createStudent);
//getStudents is a call back fn.

export default router;