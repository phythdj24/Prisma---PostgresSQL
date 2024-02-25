import { Router } from "express";
import UserRoute from './userRoutes.js'

const router = Router()
 
router.use('/api/user', UserRoute)

export default router;