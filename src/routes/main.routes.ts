import { Router } from "express";
const mainRouter = Router()

mainRouter.get('/',(req,res)=>{
    res.send(`${req.path}`)
})
export default mainRouter