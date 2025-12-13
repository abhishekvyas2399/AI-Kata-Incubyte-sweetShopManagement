import {Router} from "express"

const router=Router();

// first request goto middleware then after that it goto register/login user controller
router.post('/register',(req,res)=>{
    res.json("hy");
});
router.post('/login',(req,res)=>{
    res.json("hy");
});
router.post('/verifyJwt',(req,res)=>{
    res.json("hy");
});

export default router;