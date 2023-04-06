import { User } from "../database";

const addUser = (USER: Object) => {
  User.create(USER)
    .then((user) => console.log(user))
    .catch((err) => console.error("[Error]:", err));
};

export { addUser };
