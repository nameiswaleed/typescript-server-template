import { Router } from "express";
const userRouter = Router()

userRouter.get('/',(req,res)=>{
    res.send(`${req.query.id}`)
    console.log(req.query)
})
export default userRouter