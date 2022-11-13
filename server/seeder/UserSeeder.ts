import { Remult } from "remult";
import { User } from "../../shared/models/User";

const UserSeeder = async (remult: Remult) => {
  const userRepo = remult.repo(User);
  if ((await userRepo.count()) > 0) {
    return;
  }

  await userRepo.insert([{ username: "admin", password: "", name: "Admin" }]);
};

export default UserSeeder;
