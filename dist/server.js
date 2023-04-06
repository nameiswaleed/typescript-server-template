"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const config_1 = __importDefault(require("./config"));
const port = config_1.default.port;
const routes_1 = require("./routes");
//declaring routes
app.use('/', routes_1.mainRouter);
app.use('/user', routes_1.userRouter);
app.listen(port, () => console.log(`app is running on http://localhost:${port}`));
