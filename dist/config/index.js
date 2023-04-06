"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const envConfig = {
    path: path_1.default.join(__dirname, '../../.env'),
    encoding: 'utf-8'
};
// Load the configurations from .env file
dotenv_1.default.config(envConfig);
const envVars = process.env;
const configs = {
    mongoUri: envVars.MONGOURI,
    dbName: envVars.DB,
    dbAddress: `${envVars.MONGOURI}/${envVars.DB}`,
    port: envVars.PORT
};
exports.default = configs;
