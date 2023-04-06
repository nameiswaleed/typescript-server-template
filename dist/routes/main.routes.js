"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainRouter = (0, express_1.Router)();
mainRouter.get('/', (req, res) => {
    res.send(`${req.path}`);
});
exports.default = mainRouter;
