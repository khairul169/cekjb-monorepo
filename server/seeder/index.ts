import { Remult } from "remult";
import UserSeeder from "./UserSeeder";

const Seeder = async (remult: Remult) => {
  await UserSeeder(remult);
};

export default Seeder;
