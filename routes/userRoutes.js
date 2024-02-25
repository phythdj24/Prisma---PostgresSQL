import { Router } from "express";
import { UpdateUser, createUser } from "../controllers/UserController.js";


const router = Router()

router.post("/", createUser);
router.put('/:id', UpdateUser)




export default router;