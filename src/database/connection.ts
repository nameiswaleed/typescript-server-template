import mongoose from "mongoose";
import configs from "../config";

const connetDB = async () => {
  configs.mongoUri
    ? await mongoose
        .connect(configs.dbAddress)
        .then((res) =>
          console.log(`database connected successfully with ${configs.dbName}`)
        )
        .catch((err) => console.log(`[DATABASE ERR]: ${err}`))
    : console.log("Database URI Not Found");

  const db = mongoose.connection;
  //   db.on("open", () =>
  //     console.log(`database connected successfully with ${configs.dbName}`)
  //   );
  //   db.on("error", () =>
  //     console.log(
  //       `[DATABASE ERR]: DATABASE NOT CONNECTED OR MIGHT BE AN ERROR PLEASE CHECK WHETHER THE STRING IS CORRECT OR NOT `
  //     )
  //   );
  return db;
};

export { connetDB };
