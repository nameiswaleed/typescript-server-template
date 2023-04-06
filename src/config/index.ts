import dotenv, { config, DotenvConfigOptions } from 'dotenv';
import path from 'path';

const envConfig: DotenvConfigOptions = {
  path:  path.join(__dirname, '../../.env'),
  encoding: 'utf-8'
};



// Load the configurations from .env file
dotenv.config(envConfig);

const envVars =process.env

const configs = {
    mongoUri : envVars.MONGOURI,
    dbName: envVars.DB,
    dbAddress: `${envVars.MONGOURI}/${envVars.DB}`,
    port:envVars.PORT 
}

export default configs