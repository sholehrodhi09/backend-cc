import express from "express";
import { getUser,
         getUserByid, Register 
} from "../controller/users.js";


const router = express.Router();

router.get('/user', getUser);
router.get('/user/:id', getUserByid);
router.post('/user', Register);

export default router;