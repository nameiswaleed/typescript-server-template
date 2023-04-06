"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.get('/', (req, res) => {
    res.send(`${req.query.id}`);
    console.log(req.query);
});
exports.default = userRouter;
